#!/usr/bin/env python3
"""Build the downloadable CV from the same data used by the Jekyll site."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "_data"
OUTPUT = ROOT / "files" / "CV.pdf"
INK = colors.HexColor("#292B2A")
MUTED = colors.HexColor("#555B55")
ACCENT = colors.HexColor("#8B3D48")
LINE = colors.HexColor("#DDDCD4")

STYLES = {
    "name": ParagraphStyle(
        "name", fontName="Times-Bold", fontSize=25, leading=28, textColor=INK,
        alignment=TA_CENTER, spaceAfter=7,
    ),
    "contact": ParagraphStyle(
        "contact", fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED,
        alignment=TA_CENTER, spaceAfter=16,
    ),
    "section": ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=10, leading=14,
        textColor=ACCENT, spaceBefore=14, spaceAfter=8, keepWithNext=True,
    ),
    "title": ParagraphStyle(
        "title", fontName="Helvetica-Bold", fontSize=10, leading=14,
        textColor=INK, spaceBefore=7, spaceAfter=4, keepWithNext=True,
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=9.2, leading=12.5,
        textColor=INK, spaceAfter=6,
    ),
    "bullet": ParagraphStyle(
        "bullet", fontName="Helvetica", fontSize=9.2, leading=12.5,
        textColor=INK, spaceAfter=4, leftIndent=10, firstLineIndent=-8,
    ),
    "publication": ParagraphStyle(
        "publication", fontName="Helvetica", fontSize=8.75, leading=12.25,
        textColor=INK, spaceAfter=5,
    ),
    "note": ParagraphStyle(
        "note", fontName="Helvetica-Oblique", fontSize=8.25, leading=11,
        textColor=MUTED, spaceAfter=5,
    ),
}


def read_data(name: str):
    return json.loads((DATA / f"{name}.yml").read_text())


def paragraph(text: str, style: str = "body") -> Paragraph:
    escaped = html.escape(re.sub(r"\s+", " ", text).strip())
    escaped = escaped.replace("Niu, L.", "<b>Niu, L.</b>")
    return Paragraph(escaped, STYLES[style])


def entry(role: str, organization: str, date: str, bullets: list[list[str]]):
    block = [paragraph(f"{role} | {date}" if date else role, "title")]
    if organization:
        block.append(paragraph(organization))
    for label, detail in bullets:
        block.append(paragraph(f"- {label}: {detail}", "bullet"))
    return KeepTogether(block)


def footer(canvas, document):
    canvas.setStrokeColor(LINE)
    canvas.line(48, 42, A4[0] - 48, 42)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(48, 29, "Luyao Niu | Curriculum Vitae")
    canvas.drawRightString(A4[0] - 48, 29, str(document.page))


def main():
    profile = read_data("profile")
    current = read_data("current_research")
    experience = read_data("experience")["items"]
    cv = read_data("cv")
    publications = read_data("publications")

    story = [
        paragraph("LUYAO NIU (SHE/HER)", "name"),
        Paragraph(
            'PhD student, University of Southern California<br/>'
            '<link href="mailto:luyaoniu@usc.edu" color="#8B3D48">luyaoniu@usc.edu</link>'
            ' | <link href="https://livianiu620.github.io/LuyaoNiu.github.io/" color="#8B3D48">Academic homepage</link>',
            STYLES["contact"],
        ),
        paragraph("EDUCATION", "section"),
    ]

    for school in profile["education"]:
        story.extend([
            paragraph(school["en"], "title"),
            paragraph(f"{school['degree_en']} | {school['date']}")
        ])

    story.extend([
        paragraph("RESEARCH INTERESTS", "section"),
        paragraph(profile["focus"]["en"]),
        paragraph(" | ".join(item["en"] for item in profile["research"])),
        paragraph(current['title_en'], "title"),
        paragraph(current["summary_en"]),
    ])
    for topic in current['items']:
        story.append(KeepTogether([
            paragraph(topic['en'], 'title'),
            paragraph(topic['desc_en']),
            paragraph(topic['methods'], 'note'),
        ]))

    story.extend([PageBreak(), paragraph("PROFESSIONAL EXPERIENCE", "section")])
    for item in experience:
        english = item["en"]
        story.append(entry(english["role"], english["org"], english["date"], english["bullets"]))
        story.append(Spacer(1, 4))

    story.extend([PageBreak(), paragraph("ACADEMIC SERVICE", "section")])
    for group in cv['service']:
        story.append(paragraph(group['role_en'], 'title'))
        for venue in group['venues']:
            story.append(paragraph('- ' + venue, 'bullet'))

    story.append(paragraph('ORAL PRESENTATIONS', 'section'))
    for talk in sorted(read_data('talks'), key=lambda item: item['date'], reverse=True):
        story.append(paragraph(f"{talk['venue']} | {talk['date_en']} | {talk['location_en']}"))

    story.extend([paragraph("HONORS & AWARDS", "section")])
    for group in cv["awards"]:
        story.append(paragraph(group["group_en"], "title"))
        for award in group["items"]:
            story.append(paragraph(f"- {award['en']}", "bullet"))
    story.extend([
        paragraph("LEADERSHIP & SERVICE", "section"),
        paragraph("President, Student Union | Beijing Jiaotong University | Jun. 2021 - Jun. 2023", "title"),
        paragraph("Led university-wide student affairs and brand events reaching 80,000+ participants."),
        paragraph("Volunteer, Beijing 2022 Winter Olympics | National Indoor Stadium | Jan. 2022 - Apr. 2022", "title"),
        paragraph("Personnel management and venue operations; named Outstanding Volunteer."),
    ])
    for program in cv['programs']:
        story.append(KeepTogether([
            paragraph(f"{program['en']} | {program['date']}", 'title'),
            paragraph(program['org_en']),
            paragraph(program['desc_en']),
        ]))
    story.extend([PageBreak(), paragraph('PUBLICATIONS & MANUSCRIPTS', 'section')])

    publications_by_year = sorted(publications, key=lambda paper: paper["year"], reverse=True)
    journal = [paper for paper in publications_by_year if paper["kind"] == "journal"]
    conference = [paper for paper in publications_by_year if paper["kind"] == "conference"]
    manuscripts = [paper for paper in publications_by_year if paper["kind"] == "preprint"]
    for heading, papers in (("Journal", journal), ("Conference", conference), ("Manuscripts & Preprints", manuscripts)):
        if not papers:
            continue
        story.append(paragraph(heading, "title"))
        for paper in papers:
            citation = paper["citation"]
            story.append(paragraph(citation, "publication"))
            if paper.get("note_en"):
                story.append(paragraph(paper["note_en"], "note"))

    document = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4, rightMargin=48, leftMargin=48,
        topMargin=42, bottomMargin=58, title="Luyao Niu - Curriculum Vitae",
        author="Luyao Niu",
    )
    document.build(story, onFirstPage=footer, onLaterPages=footer)

    text = "\n".join(page.extract_text() for page in PdfReader(OUTPUT).pages)
    required = [
        "Xiaohongshu", "MSWiM", "IEEE GLOBECOM", "Transportation Research Board",
        "Applied Geography", "GeoSplit", "MSDLoss", "ICASSP 2027", "Systems",
        "Global Competence", "Dependable and Secure Computing", "Transactions on Big Data",
    ]
    if 'Whose Normal' in text or 'WSDM' in text:
        raise RuntimeError('Removed work or superseded reviewer venue remains in the CV.')
    missing = [item for item in required if item not in text]
    if missing:
        raise RuntimeError(f"CV PDF is missing required content: {missing}")
    print(f"Built {OUTPUT.name}: {len(PdfReader(OUTPUT).pages)} pages.")


if __name__ == "__main__":
    main()
