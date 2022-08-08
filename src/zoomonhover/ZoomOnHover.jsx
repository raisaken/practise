import React, { useEffect } from "react";
import $ from "jquery";
import "./zoom.css";

function ZoomOnHover() {
  useEffect(() => {
    x();
  }, []);

  const x = () => {
    $(".img_producto_container")
      // tile mouse actions
      .on("mouseover", function () {
        $(this)
          .children(".img_producto")
          .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
      })
      .on("mouseout", function () {
        $(this).children(".img_producto").css({ transform: "scale(1)" });
      })
      .on("mousemove", function (e) {
        $(this)
          .children(".img_producto")
          .css({
            "transform-origin":
              ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
              "% " +
              ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
              "%",
          });
      });
  };

  return (
    <div>
      <div className="img_producto_container" data-scale="1.6">
        <a
          className=" img_producto"
          href="http://henielab.com/wp-content/uploads/2019/09/Anteal-Producto-Henie-Lab-Honduras-1024x683.png"
          target="_self"
          style={{
            backgroundImage:
              "url('http://henielab.com/wp-content/uploads/2019/09/Anteal-Producto-Henie-Lab-Honduras-1024x683.png')",
          }}
        ></a>
      </div>
    </div>
  );
}

export default ZoomOnHover;
