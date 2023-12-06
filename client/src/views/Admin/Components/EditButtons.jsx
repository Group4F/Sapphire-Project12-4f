import { useNavigate } from 'react-router-dom';
import "./styles.less"
const EditButtons = () => {
    const navigate = useNavigate();

    const routeOrganizations = () => {
        navigate('/organizationlist');
    };
    const routeClassrooms = () => {
        navigate('/classroomlist');
      };
    const routeTeachers = () => {
        navigate('/teacherlist');
    };
    const routeLessons = () => {
        navigate('/lessonlist');
    };
    const routeManageStudents = () => {
        navigate('/managestudents');
      };
    const handleClick = () => {
        console.log('Button clicked!');
      };
    

    return(
        <div>
            <button className="first-button" onClick={routeOrganizations}>Edit Organizations</button>
            <button className="custom-button" onClick={routeClassrooms}>Edit Classrooms</button>
            <button className="custom-button" onClick={routeTeachers}>Edit Teachers</button>
            <button className="custom-button" onClick={routeLessons}>Edit Lessons</button>
            <button className="custom-button" onClick={routeManageStudents}>Manage Students</button>
        </div>
    );
};

export default EditButtons;