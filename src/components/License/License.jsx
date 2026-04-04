import { license } from "../../Utils/data"
import './License.css'

const License = () => {
  return (
    <section className="training-container">
      <h5>Training License</h5>
       <div className="training-content">
        {
            license.map(li=>(
                <img src={li} alt="training" />
            ))
        }
                     
        </div>

    </section>
  )
}

export default License
