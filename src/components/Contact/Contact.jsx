import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';
import { FaTrashCan } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

export default function Contact({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {item.number}
        </p>
      </div>
      <div className={css.btnGroup}>
        {/* <button className={css.btn} >
          <FaEdit className={css.btnIcon} />
        </button> */}
        <button
          className={css.btn}
          onClick={() => {
            dispatch(deleteContact(item.id))
              .unwrap()
              .then(() => {
                toast.success('Contact successfully deleted!');
              })
              .catch(err => {
                toast.error(`${err.message}`);
              });
          }}
        >
          <FaTrashCan className={css.btnIcon} />
        </button>
      </div>
      <Toaster />
    </div>
  );
}
