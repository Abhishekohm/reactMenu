import React from "react";

const Menu = ({ datas }) => {
  return (
    <div className="section-center">
      {datas.map((data) => {
        return (
          <article key={data.id} className="menu-item">
            <img src={data.img} alt="" className="photo" />
            <div className="item-info">
              <header>
                <h4>{data.title}</h4>
                <h4 className="price">${data.price}</h4>
              </header>
              <p className="item-text">{data.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
