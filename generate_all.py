base_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alle Bilder</title>
    <style>
      body {{
        width: 100%;
        height: 100%;
        text-align: center;
      }}

      .imgContainer {{
        display: block;
      }}

      p {{
        font-size: 1.2em;
      }}
    </style>
</head>
<body>
{}
</body>
</html>
"""

BODY_PARTS = [
    "Linker Unterschenkel",
    "Rechter Unterschenkel",
    "Linker Oberschenkel",
    "Rechter Oberschenkel",
    "Linker Unterarm",
    "Rechter Unterarm",
]

image_tags = []
for i in range(1, 6):
    for j in range(i + 1, 7):
        tag = f"""<div class='imgContainer'>
    <p>{BODY_PARTS[i - 1]} an {BODY_PARTS[j - 1]} ({i} {j})</p>
    <img alt='example for position with numbers {i} and {j}' src='https://sos-de-fra-1.exo.io/trexflankenyoga/trex_{i}_{j}.jpg' />
</div>"""
        image_tags.append(tag)

with open("public/all.html", "w+") as f:
    f.write(base_html.format("\n".join(image_tags)))
