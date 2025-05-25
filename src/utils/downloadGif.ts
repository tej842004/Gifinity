export async function downloadGif(gifUrl: string, fileName: string) {
  const response = await fetch(gifUrl, { mode: "cors" });
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();

  window.URL.revokeObjectURL(url);
}
