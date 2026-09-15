"""Compress oversized product PNGs to web JPEGs."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "images"
TARGETS = [
    ROOT / "products",
    ROOT / "hero",
]

MAX = 1200
QUALITY = 80


def compress(path: Path) -> None:
    if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
        return
    if path.name.lower().endswith(".png") and path.stat().st_size < 400_000:
        return
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", im.size, (245, 240, 230))
        rgba = im.convert("RGBA")
        bg.paste(rgba, mask=rgba.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    im.thumbnail((MAX, MAX), Image.Resampling.LANCZOS)
    out = path.with_suffix(".jpg") if path.suffix.lower() == ".png" else path
    im.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    print(f"{path.name:40} {path.stat().st_size:8} -> {out.name} {out.stat().st_size:8}")


def main() -> None:
    for folder in TARGETS:
        for path in sorted(folder.iterdir()):
            if path.is_file():
                compress(path)


if __name__ == "__main__":
    main()
