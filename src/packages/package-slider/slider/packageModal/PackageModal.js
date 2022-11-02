import React, { useEffect, useState } from "react";
import {
  CardDivider,
  FeatureInput,
  InputWithUnit,
} from "../components/Components";
import { SingleDropDown } from "components/drop-down/single-drop-down/SingleDropDown";
import { Switch } from "components/switch/Switch";
import CloseButton from "components/modal-close-btn/CloseButton";
import Input from "components/input/Input";
// import toasts from "../../common/toasts/toasts";
import { ReactComponent as AddIcon } from "assets/images/icons/add-square-gray.svg";
import styles from "./PackageModal.module.scss";

// static data
const expireUnits = [
  {
    id: "day",
    name: "روز",
  },
  {
    id: "month",
    name: "ماه",
  },
  {
    id: "year",
    name: "سال",
  },
];

const currencies = [
  {
    id: 1,
    name: "ریال",
  },
  {
    id: 2,
    name: "درهم",
  },
  {
    id: 4,
    name: "دلار",
  },
  {
    id: 4,
    name: "یورو",
  },
];

function PackageModal({ data, onHide }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState({ value: "", currency: null });
  const [expire, setExpire] = useState({ value: "", unit: expireUnits[0] });
  const [featureList, setFeatureList] = useState([]);
  const [switches, setSwitches] = useState({
    isActive: true,
    isPremium: false,
  });
  // const [currencies, setCurrencies] = useState([]);

  //   useEffect(() => {
  //     handleGetCurrencies();
  //   }, []);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setPrice({ value: data.price, currency: data.currency });
      setExpire({
        value: data.expiry_time,
        unit: expireUnits.find((item) => item.id === data.expiry_type),
      });
      setFeatureList(data.features);
      setSwitches({ isActive: data.active, isPremium: data.premium });
    }

    if (!data && currencies.length) {
      setPrice({ value: "", currency: currencies[0] });
    }
  }, [data]);

  //   const handleGetCurrencies = async () => {
  //     const { data } = await getCurrencies();
  //     setCurrencies(data.data);
  //   };

  //   const handleSubmit = () => {
  //     const condition = name.length && price.value && expire;

  //     const payload = {
  //       expiry_time: expire.value,
  //       expiry_type: expire.unit.id,
  //       name: name,
  //       price: price.value,
  //       active: switches.isActive,
  //       premium: switches.isPremium,
  //       currency_id: price.currency.id,
  //     };

  //     if (condition) {
  //       if (data) {
  //         updatePackage(payload);
  //       } else {
  //         createPackage(payload);
  //       }
  //     } else {
  //       toasts.error("فیلدهای مورد نظر رو پرکنید");
  //     }
  //   };

  //   const createPackage = async (payload) => {
  //     try {
  //       const { data, status } = await postPackage(payload);
  //       await handlePatchFeatureItems(data.data.id);

  //       if (status === 200) {
  //         dispatch(setPackages());
  //         onHide();
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   const updatePackage = async (payload) => {
  //     try {
  //       const { status } = await putPackage({ ...payload, id: data.id });
  //       await handlePatchFeatureItems(data.id);

  //       if (status === 200) {
  //         dispatch(setPackages());
  //         onHide();
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   const handlePatchFeatureItems = async (packageId) => {
  //     const trimmedFeatureList = featureList.filter(
  //       (item) => item.text !== "" && !item.id
  //     );

  //     for (const feature of trimmedFeatureList) {
  //       try {
  //         const payload = {
  //           package_id: packageId,
  //           text: feature.text,
  //         };

  //         await patchAppendFeatureItemToPackage(payload);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   };

  const handleRemoveFeature = (data) => {
    if (data.id) {
      //   handleRemove(data);
      return false;
    } else {
      const newArr = featureList.filter((item) => item.text !== data.text);

      setFeatureList(newArr);
    }
  };

  //   const handleRemove = async (data) => {
  //     try {
  //       await patchRemoveFeatureItemFromPackage({
  //         feature_id: data.id,
  //         package_id: data.package_id,
  //       });

  //       const newArr = featureList.filter((item) => item.id !== data.id);

  //       dispatch(setPackages());
  //       setFeatureList(newArr);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const handleChangeFeature = (e, index) => {
    const mappedArr = featureList.map((item, i) => {
      if (i === index) {
        return { text: e.target.value };
      } else {
        return item;
      }
    });

    setFeatureList(mappedArr);
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton onHide={onHide} />

      <div className={styles.headerFields}>
        <Input
          placeholder="نام بسته"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <InputWithUnit
          placeholder="قیمت بسته"
          units={currencies}
          // defaultValue={currencies[0].name}
          unitState={[
            price.currency,
            (e) => setPrice({ ...price, currency: e }),
          ]}
          value={price.value}
          onChange={(e) =>
            setPrice({ ...price, value: Number(e.target.value) })
          }
        />

        <SingleDropDown
          units={currencies}
          unitState={[
            price.currency,
            (e) => setPrice({ ...price, currency: e }),
          ]}
          value={price.value}
          onChange={(e) =>
            setPrice({ ...price, value: Number(e.target.value) })
          }
        />
      </div>

      <div className={styles.switchContainer}>
        <Switch
          text="بسته ساده"
          toggleState={[
            switches.isPremium,
            (e) => setSwitches({ ...switches, isPremium: e }),
          ]}
        />
        <Switch
          text="بسته فعال"
          toggleState={[
            switches.isActive,
            (e) => setSwitches({ ...switches, isActive: e }),
          ]}
        />
      </div>

      <CardDivider position="top" fill="#808080" isModal />

      <div className={styles.bodyFields}>
        {featureList.map((item, index) => (
          <FeatureInput
            key={index}
            value={item.text}
            readOnly={Boolean(item.id)}
            onChange={(e) => handleChangeFeature(e, index)}
            handleRemove={() => handleRemoveFeature(item)}
          />
        ))}

        <div
          className={styles.addField}
          onClick={() => setFeatureList([...featureList, { text: "" }])}>
          <AddIcon />
          افزودن ویژگی جدید
        </div>
      </div>

      <div className={styles.footerFields}>
        <button
        // onClick={handleSubmit}
        >
          ثبت بسته
        </button>
      </div>
    </div>
  );
}

export default PackageModal;
