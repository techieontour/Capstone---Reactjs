import { FC, ReactElement } from "react";
import "./Category-Item.styles.scss";

const CategoryItem: FC = ({ category }): ReactElement => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
