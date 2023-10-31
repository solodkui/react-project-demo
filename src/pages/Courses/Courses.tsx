// * Base
import { Outlet } from 'react-router-dom';
import { memo } from 'react';

const Courses = memo(() => <Outlet />);

export default Courses;
