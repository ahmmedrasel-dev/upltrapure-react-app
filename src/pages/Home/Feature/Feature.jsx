import { HiUserGroup } from "react-icons/hi2";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import SingleFeture from "./SingleFeture";
import { FaHandsHelping } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoBulb } from "react-icons/io5";

const Feature = () => {
  const features = [
    {
      _id: 1,
      icon: <FaHandHoldingWater />,
      title: "Customized Solutions",
      summary:
        "Customized solutions for each client based on water quality issues, usage patterns, and regulatory requirements ensure maximum effectiveness and efficiency.",
    },
    {
      _id: 2,
      icon: <HiUserGroup />,
      title: "Experienced Staff",
      summary:
        "Our experienced staff of engineers and technicians are experts in the latest water treatment technologies and methods, ensuring effective solutions for our clients.",
    },
    {
      _id: 3,
      icon: <MdWorkspacePremium />,
      title: "Quality Products",
      summary:
        "We offer high-quality water treatment products, including filtration systems, water softeners, and reverse osmosis systems, ensuring long-lasting solutions for our clients.",
    },
    {
      _id: 4,
      icon: <FaHandsHelping />,
      title: "Reliability",
      summary:
        "We ensures that our products and services consistently meet the highest standards of reliability for our valueable customer.",
    },
    {
      _id: 5,
      icon: <IoBulb />,
      title: "Innovation",
      summary:
        "Our team of experts thrives on solving complex challenges with inventive solutions, ensuring that our clients benefit from the latest advancements in water treatment.",
    },
    {
      _id: 6,
      icon: <TbTruckDelivery />,
      title: "Timely Delivery",
      summary:
        "We prioritize timely delivery as a key element of our commitment to excellence. We understand the significance of your time, and our streamlined processes ensure.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-8 grid-cols-1 lg:p-20 p-4">
      {features.map((item) => (
        <SingleFeture key={item._id} feature={item}></SingleFeture>
      ))}
    </div>
  );
};

export default Feature;
