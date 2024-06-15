const stripHtmlTags = (html: any) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  return tempElement.textContent || tempElement.innerText || "";
};

export default stripHtmlTags;
