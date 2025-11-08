export const scrollToElement = (id: string, smooth: boolean = true) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  }
};
