import './App.css'

function App() {

  return (
    <>

  <header class="max-w-2xl mx-auto px-6 pt-16">
    <h1 class="text-4xl font-semibold tracking-tight">Abigail G. Rodrigo</h1>
    <p class="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
    <hr class="mt-8 border-slate-200" />
  </header>

  <main class="max-w-2xl mx-auto px-6 py-10">

    {/* Replace everything below with your own details. */}

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-3">About</h2>
      <p class="leading-relaxed text-slate-700">
        I grew up in Saudi Arabia. I lived there for 16 years and I moved to Cebu City for senior high school and college.
        I picked IT because it's what my family wants for me. As of now, I have a love-hate relationship on this course.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-3">Details</h2>
      <p class="leading-relaxed text-slate-700">
        Course: BS Information Technology
        <br />
        Year level: Third year
        <br />
        Hometown: Minglanilla, Cebu
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-3">Things I like</h2>
      <ul class="list-disc list-inside space-y-1 text-slate-700">
        <li>Watching Korean Drama and Listening to Korean pop songs</li>
        <li>Snacking fries, ice cream, or anything sweets and tasty</li>
        <li>Going out and bond with my family or friends</li>
      </ul>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-3">Reach me</h2>
      <p class="leading-relaxed text-slate-700">
        abigail.rodrigo@cit.edu
        <br />
        @abigailrodrigo on most things
      </p>
    </section>

  </main>

  <section class="max-w-2xl mx-auto px-6 pb-16">
    <hr class="mb-6 border-slate-200" />
    <p class="text-sm text-slate-500">Made for CSIT340.</p>
  </section>
 </>
  )
}

export default App
