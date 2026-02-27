// display student data
import PropTypes from 'prop-types'
const Student = ({ name="Guest", age=0, subject= "Not defined", isStudent= false }) => {
    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Subject: {subject}</p>
            <p>Status: {isStudent ? "Student" : "Not Student"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student