const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}

const Content = ({ course }) => {
    return (
        <ul>{course.parts.map(part => (
            <Part key={part.id} part={part} />
        ))}</ul>
    )

}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>

    )
}
export default Course