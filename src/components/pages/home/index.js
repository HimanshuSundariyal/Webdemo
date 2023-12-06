import React from "react";
import DefaultPage from "../../layouts/defaultPage";
import Banner from "../../stories/banner";
import CardItem from "../../stories/cardItem";

const Home = () => {
  return (
    <DefaultPage>
      <div className="container">
        <Banner />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="">
          <div class="row">
            <div class="col">
              <CardItem />
            </div>
            <div class="col">
              <CardItem />
            </div>
            <div class="col">
              <CardItem />
            </div>
          </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        </p>
      </div>
    </DefaultPage>
  );
};

export default Home;
