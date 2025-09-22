import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import TaskList from './TaskList';

const About = () => <div className="content"><h2>About</h2><p>About this app.</p></div>;
const Settings = () => <div className="content"><h2>Settings</h2><p>App settings.</p></div>;
const Files = () => <div className="content"><h2>Settings</h2><p>App settings.</p></div>;


const AppRoutes = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
    return (
        <Routes>
            <Route path="/tasks" element={<TaskList tasks={tasks} onToggleComplete={onToggleComplete} onDelete={onDelete} onEdit={onEdit} />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/files" element={<Files />} />

            <Route path="" element={<TaskList tasks={tasks} onToggleComplete={onToggleComplete} onDelete={onDelete} onEdit={onEdit} />} />
        </Routes>
    );
};

AppRoutes.propTypes = {
    tasks: PropTypes.array.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default AppRoutes;
