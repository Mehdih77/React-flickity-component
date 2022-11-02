import { Modal } from "react-bootstrap";
import CloseButton from "components/modal-close-btn/CloseButton";
import styles from "./DeleteModal.module.scss";

function DeleteModal({ context, onHide, onDelete }) {
  return (
    <div>
      <CloseButton onHide={onHide} />

      <Modal.Header className={styles.header}>
        <Modal.Title>حذف {context.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <p>
          شما از حذف <span>{context.title}</span> اطمینان دارید؟ در صورت حذف شدن
          امکان بازگشت آن وجود نخواهد داشت
        </p>

        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.btn} ${styles.outline}`}
            onClick={onDelete}>
            حذف {context.button}
          </button>
          <button
            className={`${styles.btn} ${styles.primary}`}
            onClick={onHide}>
            انصراف
          </button>
        </div>
      </Modal.Body>
    </div>
  );
}

export default DeleteModal;
