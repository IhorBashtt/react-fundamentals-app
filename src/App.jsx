import React, { useState } from "react";
import styles from "./App.module.css";
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import { CourseInfo, Courses, Header } from "./components";
import CourseForm from "./components/CourseForm/CourseForm";

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
  // Список курсов хранится в состоянии для возможности обновления при добавлении/изменении.
  const [courses, setCourses] = useState(mockedCoursesList);
  // Если установлено, показываем подробную информацию о курсе.
  const [showCourseId, setShowCourseId] = useState("");
  // Если установлен объект (с данными курса или пустой для нового курса), показываем форму.
  const [courseToEdit, setCourseToEdit] = useState(null);
  // Состояние поискового запроса для фильтрации курсов.
  const [searchQuery, setSearchQuery] = useState("");

  // Удаление курса по id
  const handleDeleteCourse = (courseId) => {
    const updatedCourses = courses.filter((course) => course.id !== courseId);
    setCourses(updatedCourses);
    if (showCourseId === courseId) {
      setShowCourseId("");
    }
  };

  // При нажатии на UPDATE открываем форму для редактирования выбранного курса.
  const handleUpdateCourse = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    if (course) {
      setCourseToEdit(course);
    }
  };

  // Открываем форму для добавления нового курса (пустой объект).
  const handleAddNewCourse = () => {
    setCourseToEdit({
      title: "",
      description: "",
      duration: "",
      creationDate: new Date().toISOString(),
      authors: [],
    });
  };

  // При сохранении формы: если курс уже имел id, обновляем его, иначе добавляем новый.
  const handleSaveCourse = (courseData) => {
    if (courseData.id) {
      // обновление существующего курса
      setCourses((prev) =>
        prev.map((c) => (c.id === courseData.id ? courseData : c))
      );
    } else {
      // добавление нового курса: назначаем id и добавляем в начало списка
      courseData.id = Date.now();
      setCourses((prev) => [courseData, ...prev]);
    }
    // Сбрасываем выбранную форму и детальный просмотр
    setCourseToEdit(null);
    setShowCourseId("");
  };

  const handleCancelForm = () => {
    setCourseToEdit(null);
  };

  return (
    <div className={styles.wrapper}>
      {/* Передаём onSearch в Header для управления поисковым состоянием */}
      <Header onSearch={setSearchQuery} />
      <div className={styles.container}>
        {courseToEdit ? (
          <CourseForm
            course={courseToEdit}
            onSave={handleSaveCourse}
            onCancel={handleCancelForm}
          />
        ) : showCourseId !== "" ? (
          <CourseInfo
            coursesList={courses}
            authorsList={mockedAuthorsList}
            showCourseId={showCourseId}
            onBack={() => setShowCourseId("")}
          />
        ) : (
          <Courses
            coursesList={courses}
            authorsList={mockedAuthorsList}
            handleShowCourse={setShowCourseId}
            handleDeleteCourse={handleDeleteCourse}
            handleUpdateCourse={handleUpdateCourse}
            onAddClick={handleAddNewCourse}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
}

export default App;
