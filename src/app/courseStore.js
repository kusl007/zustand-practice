import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'
//persist helps to store all the information in local browser       

const courseStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
})

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",

            //stores in local storage with courses name
        })
    )
)


export default useCourseStore;