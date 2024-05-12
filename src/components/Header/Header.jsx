import css from "./Header.module.css"

export default function Header() {
  return (
    <div className={css.container}>
      <div className={css.nav}>
        <p className={css.logo}>
          Web
          <span className={css.logo2}>Studio</span>
        </p>
        <ul className={css.pagesNavlist}>
          <li className={css.items}>Studio</li>
          <li className={css.items}>Portfolio</li>
          <li className={css.items}>Contacts</li>
        </ul>
        <ul className={css.contacts}>
          <li className={css.contactsItem}>info@devstudio.com</li>
          <li className={css.contactsItem}>+11 (000) 111-11-11</li>
        </ul>
      </div>
    </div>
  )
}
