import css from './PhonebookList.module.css';

const PhonebookList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, number, name }) => (
    <li className={css.listItem} key={id}>
      {name}: {number}{' '}
      <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default PhonebookList;
