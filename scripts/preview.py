#!/usr/bin/env python3
"""Preview the existing Jekyll build with Python's standard library only."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.request import urlopen
import threading
import webbrowser

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'
BASE = '/LuyaoNiu.github.io'

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == BASE:
            self.send_response(302)
            self.send_header('Location', BASE + '/')
            self.end_headers()
            return
        if self.path.startswith(BASE + '/'):
            self.path = self.path[len(BASE):]
        super().do_GET()


def main():
    if not (SITE / 'index.html').is_file():
        raise SystemExit('尚未生成网站，请先运行 bundle exec jekyll build，再打开预览。')
    for port in range(4000, 4010):
        url = f'http://127.0.0.1:{port}{BASE}/'
        try:
            with urlopen(url, timeout=1) as response:
                body = response.read().decode('utf-8', errors='replace')
            if 'Luyao Niu' in body and 'academic.css' in body:
                print('网站预览：' + url)
                webbrowser.open(url)
                return
        except (OSError, ValueError):
            pass
        try:
            server = ThreadingHTTPServer(('127.0.0.1', port), partial(Handler, directory=str(SITE)))
        except OSError:
            continue
        print('网站预览：' + url, flush=True)
        print('关闭此终端或按 Ctrl+C 可停止预览。源码修改后需重新构建。', flush=True)
        threading.Timer(0.5, lambda: webbrowser.open(url)).start()
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
        finally:
            server.server_close()
        return
    raise SystemExit('4000–4009 端口均被占用，请关闭旧预览窗口后重试。')

if __name__ == '__main__':
    main()
