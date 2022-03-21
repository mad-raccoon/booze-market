import React from "react";
import { boozeApi } from "../../../shared/api";
import { BoozeItem } from "../../../shared/domains";
import { BoozeAddView, BoozeListView } from "../../views";
import "./Home.css";

enum EHomeView {
  LIST = "list",
  ADD = "add",
}

const Home = () => {
  const [homeView, setHomeView] = React.useState(EHomeView.LIST);
  const [boozeList, setBoozeList] = React.useState<BoozeItem[]>([]);

  React.useEffect(() => {
    const getBoozeList = async () => {
      const list = await boozeApi.getBoozeList();
      setBoozeList(list);
    };
    getBoozeList();
  }, []);

  const handleRemove = (boozeId: number) => {
    const confirmRemoval = window.confirm("Are you sure ?");

    if (confirmRemoval) {
      setBoozeList((prevBoozeList) =>
        prevBoozeList.filter((boozeItem) => boozeItem.id !== boozeId)
      );
    }
  };
  const handleAdd = (booze: BoozeItem) => {
    setBoozeList((prevBoozeList) => [
      { ...booze, id: Math.floor(Math.random() * 1000) },
      ...prevBoozeList,
    ]);
    setHomeView(EHomeView.LIST);
    alert("Booze added !");
  };

  const homeViewComponents = [
    {
      value: EHomeView.LIST,
      component: <BoozeListView list={boozeList} onItemRemove={handleRemove} />,
      label: "Booze list",
    },
    {
      value: EHomeView.ADD,
      component: <BoozeAddView onItemAdd={handleAdd} />,
      label: "Add new",
    },
  ];

  return (
    <>
      <div className="header">
        {homeViewComponents.map((view) => (
          <h1
            key={view.value}
            className={`header-option ${
              view.value === homeView ? "selected" : ""
            }`}
            onClick={() => setHomeView(view.value)}
          >
            {view.label}
          </h1>
        ))}
      </div>
      <div className="body">
        {homeViewComponents.find((view) => view.value === homeView)?.component}
      </div>
    </>
  );
};

export default Home;
