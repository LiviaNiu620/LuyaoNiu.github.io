"""Prepare owner-supplied Picture assets for web display; originals stay private."""
from pathlib import Path
import subprocess
import tempfile

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'Picture'
PAPERS = {
    'asknearby': 'AskNearby.pdf',
    'event-causnet': 'EventCausNet.pdf',
    'st-proc': 'STProc.png',
    'mf-attnbilstm': 'MF-Attn.png',
    'cross-border-mobility-health': 'Gender.png',
    'sav-transit': 'JointDesign.png',
    'spatial-identity': 'Cross-Border Spatial Identit.png',
    'ev-adoption': 'Rebound or Substitution.png',
    'transport-policy': 'BCW.png',
    'plangpt': 'PlanGPT.png',
    'geosplit': 'GeoSplit.pdf',
    'msdloss': 'MSDLoss.png',
    'critical-roads': 'Protecting Critical Roads.pdf',
    'braess-recovery': 'Fleet Coordination for Braess Recovery.pdf',
    'robotaxi-competition': 'Operational Competition in Robotaxi.pdf',
}
PHOTOS = {'rock': '摇滚', 'live': 'Liveshow.jpg', 'reading': 'Reading.jpg', 'presentation': 'Presentation.jpg'}


def save_image(source, destination, width, quality):
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGBA')
        canvas = Image.new('RGBA', image.size, 'white')
        canvas.alpha_composite(image)
        image = canvas.convert('RGB')
        image.thumbnail((width, width), Image.Resampling.LANCZOS)
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, 'WEBP', quality=quality, method=6)
        print(f'{destination.relative_to(ROOT)}: {image.width} × {image.height}')


def main():
    with tempfile.TemporaryDirectory(prefix='luyao-figures-') as scratch:
        for slug, name in PAPERS.items():
            source = SOURCE / name
            if source.suffix.lower() == '.pdf':
                prefix = Path(scratch) / slug
                subprocess.run(['pdftoppm', '-f', '1', '-singlefile', '-scale-to', '1800', '-png', str(source), str(prefix)], check=True)
                source = prefix.with_suffix('.png')
            save_image(source, ROOT / 'assets/images/papers' / f'{slug}.webp', 1800, 93)
        for slug, name in PHOTOS.items():
            save_image(SOURCE / name, ROOT / 'assets/images/life' / f'{slug}.webp', 1500, 87)


if __name__ == '__main__':
    main()
