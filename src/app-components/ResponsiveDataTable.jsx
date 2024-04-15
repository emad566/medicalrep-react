import { useEffect, useState } from "react";
import "./ResponsiveDataTable.css";

const ResponsiveDataTable = (props) => {
  const {data} = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 992) {
      const divElements = document.querySelectorAll(
        ".rdt_TableBody > .rdt_TableRow"
      );

      divElements.forEach((divElement) => {
        if (!divElement.querySelector(".showhide.show")) {
          const spanElement = document.createElement("span");
          spanElement.className = "showhide show";
          spanElement.textContent = "+";
          divElement.prepend(spanElement);
        }
      });

      const handleClick = (event) => {
        if (event.target.matches(".rdt_TableBody>.rdt_TableRow>span")) {
          const target = event.target;
          target.textContent = target.textContent === "-" ? "+" : "-";
          let i = 1;
          target.parentElement.childNodes.forEach((element) => {
            if (i > 3) {
              element.style.display =
                target.textContent === "-" ? "flex" : "none";
            }
            i++;
          });
        }
      };

      document
        .querySelector(".rdt_TableBody")
        ?.addEventListener("click", handleClick);

      return () => {
        document
          .querySelector(".rdt_TableBody")
          ?.removeEventListener("click", handleClick);
      };
    }
  }, [data, windowWidth]);

  return  <>{props.children}</>;
}

export default ResponsiveDataTable;
