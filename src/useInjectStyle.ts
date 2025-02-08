const useInjectStyle = () => {
  // Inject Naive UI styles into <head> element
  if (typeof window !== "undefined") {
    const head = document.head;
    ["naive-ui-style", "vueuc-style"].forEach((name) => {
      const meta = document.createElement("meta");
      meta.name = name;
      head.appendChild(meta);
    });
    console.debug("[Naive] Styles injected to <head>");
  }
};

export default useInjectStyle;
