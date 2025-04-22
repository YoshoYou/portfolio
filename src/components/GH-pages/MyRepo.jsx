import React from 'react';
import './MyRepo.css';
import { My_Repo } from '../../Utils/data';
const MyRepo = () => {
  return (
    <section>
      <div className="repo-container" id='My-Repo'>
        <h5>My Repository</h5>
        <p>check out my github pages to see my project live</p>
        <div className="repo-content">
          { My_Repo.map( ( item ) => (
          <a href={item.link} key={item.key} target='_blank' rel='noreferrer'>
              <div className="repo">
                <img src={item.image} alt="" />
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
            </a>           
          ))}
        </div>
      </div>
    </section>
  )
}
export default MyRepo