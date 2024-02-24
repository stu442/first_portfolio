import Header from "./components/Header"
import Project from "./components/Project"
import Stack from "./components/Stack"


function App() {

  return (
    <div className="flex-col justify-center items-center mx-[10%] my-[2%] break-keep text-center">
      <Header />
        <main>
          <Stack />
          <Project />
        </main>
    </div>
  )
}

export default App