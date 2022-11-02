import React, { useState } from "react";
// import { deletePackage } from "../../../services/packages/packages";
import { Modal } from "react-bootstrap";
import { CardDivider } from "../components/Components";
import DeleteModal from "../deleteModal/DeleteModal";
import PackageModal from "../packageModal/PackageModal";
import styles from "./PackageCard.module.scss";
// icons
import { ReactComponent as GreenCheckIcon } from "assets/images/icons/tick-square.svg";
import { ReactComponent as EditIcon } from "assets/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/images/icons/trash.svg";

function PackageCard({ data }) {

  const [modalVisibility, setModalVisibility] = useState({
    edit: false,
    delete: false,
  });

  // const handleDeletePackage = async () => {
  // 	try {
  // 		const { status } = await deletePackage(data.id);
  // 		if (status === 200) {
  // 			setModalVisibility({ ...modalVisibility, delete: false });
  // 		}
  // 	} catch (err) {
  // 		console.error(err);
  // 	}
  // };

  return (
    <div className={`${(data.premium || !data.active) && styles.active}`}>
      {data.premium && (
        <div className={`${styles.special}`}>
          <span>بسته ویژه</span>
        </div>
      )}
      {!data.active && (
        <div className={`${styles.special} ${styles.gray}`}>
          <span>غیر فعال</span>
        </div>
      )}

      <div className={`${styles.card}`}>
        <div className={styles.title}>
          <h3>{data.name}</h3>

          <p>
            <span>{data.price}</span>
            <span>{data.currency.name}</span>
          </p>
        </div>

        <CardDivider position="top" fill="#A6B5C6" />

        <ul className={styles.list}>
          {data.features.map((item) => (
            <li key={item.id}>
              <GreenCheckIcon />
              {item.text}
            </li>
          ))}
        </ul>

        <div className={styles.buttonWrapper}>
          <button
            className={`btn ${styles.edit}`}
            onClick={() =>
              setModalVisibility({ ...modalVisibility, edit: true })
            }>
            <EditIcon />
            ویرایش بسته
          </button>
          <button
            className={`btn ${styles.delete}`}
            onClick={() =>
              setModalVisibility({ ...modalVisibility, delete: true })
            }>
            <DeleteIcon />
          </button>
        </div>
      </div>

      <Modal
        show={modalVisibility.edit}
        onHide={() => setModalVisibility({ ...modalVisibility, edit: false })}
        dialogClassName={styles.editModal}>
        <PackageModal
          onHide={() => setModalVisibility({ ...modalVisibility, edit: false })}
          data={data}
        />
      </Modal>

      <Modal
        show={modalVisibility.delete}
        onHide={() => setModalVisibility({ ...modalVisibility, delete: false })}
        dialogClassName={styles.deleteModal}
        centered>
        <DeleteModal
          onHide={() =>
            setModalVisibility({ ...modalVisibility, delete: false })
          }
          // onDelete={handleDeletePackage}
          context={{
            title: `(بسته ${data.name})`,
            button: "بسته",
          }}
        />
      </Modal>
    </div>
  );
}

export default PackageCard;
