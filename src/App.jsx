import React, { useState } from "react";

import styles from "./App.module.css";
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import { CourseInfo, Courses, Header } from "./components";

// Module 1:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * add next components to the App component: Header, Courses and CourseInfo
// * pass 'mockedAuthorsList' and 'mockedCoursesList' to the Courses and CourseInfo components
// * use hook useState for saving selected courseId [showCourseId, handleShowCourse]

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * remove useState for selected courseId
// * use hook useState for storing list of courses and authors
// * import Routes and Route from 'react-router-dom'
// * Add Routes to the container div (do not include Header to the Routes since header will not be changed with pages)
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * the App component and BrowserRouter components should be wrapped with Redux 'Provider' in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * use selector from store/selectors.js to get user token from store
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component
// * get authorized user info by 'user/me' GET request if 'localStorage' contains token

function App() {
  // write your code here
  const [showCourseId, setShowCourseId] = useState("");
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.container}>
        {showCourseId === "" ? (
          <Courses
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
            handleShowCourse={setShowCourseId}
          />
        ) : (
          <CourseInfo
            coursesList={mockedCoursesList}
            authorsList={mockedAuthorsList}
            showCourseId={showCourseId}
            onBack={() => setShowCourseId("")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
