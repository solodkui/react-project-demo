// * Base
import { changeHeaderWhiteMode } from '../../../store/header.slice';
import useTitle from '../../../hooks/use-title.hook';
import { TAppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// * Components
import CoursesBanner from '../../../components/CoursesBanner/CoursesBanner';

function CoursesMain() {
  useTitle({ title: 'Курси' });
  const dispatch = useDispatch<TAppDispatch>();

  useEffect(() => {
    dispatch(changeHeaderWhiteMode(true));
    return () => {
      dispatch(changeHeaderWhiteMode(false));
    };
  }, [dispatch]);

  return <CoursesBanner />;
}

export default CoursesMain;
