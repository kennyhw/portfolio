import React from "react"
import styles from "../styles/header.module.css"

function Header() {
  return(
    <section>
      <div className="row">
        <div className={'col-12 ' + styles.profilePic}>
          PIC
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          Name
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          PART 1
        </div>
        <div className="col-2">
          |
        </div>
        <div className="col-5">
          PART 2
        </div>
      </div>
    </section>
  );
}

export default Header
