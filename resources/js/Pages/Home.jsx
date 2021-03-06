export default function () {
  return (
    <main className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">

      <div className="hidden lg:relative lg:block lg:flex-none">

        <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>

        <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">

          <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"></div>
          <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"></div>

          <nav className="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
            <ul className="space-y-9">
              <li>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">Introduction</h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-sky-500 before:bg-sky-500" href="/">Getting started</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/installation">Installation</a></li>
                </ul>
              </li>
              <li>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">Core concepts</h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/understanding-caching">Understanding caching</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/predicting-user-behavior">Predicting user behavior</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/basics-of-time-travel">Basics of time-travel</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/introduction-to-string-theory">Introduction to string theory</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/the-butterfly-effect">The butterfly effect</a></li>
                </ul>
              </li>
              <li>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">Advanced guides</h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/writing-plugins">Writing plugins</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/neuralink-integration">Neuralink integration</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/temporal-paradoxes">Temporal paradoxes</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/testing">Testing</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/compile-time-caching">Compile-time caching</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/predictive-data-generation">Predictive data generation</a></li>
                </ul>
              </li>
              <li>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">API reference</h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-predict">CacheAdvance.predict()</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-flush">CacheAdvance.flush()</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-revert">CacheAdvance.revert()</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/cacheadvance-regret">CacheAdvance.regret()</a></li>
                </ul>
              </li>
              <li>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">Contributing</h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/how-to-contribute">How to contribute</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/architecture-guide">Architecture guide</a></li>
                  <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/docs/design-principles">Design principles</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">

        <article>
          <header className="mb-9 space-y-1">
            <p className="font-display text-sm font-medium text-sky-500">Introduction</p>
            <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Getting started</h1>
          </header>
          <div className="prose prose-slate max-w-none dark:prose-invert dark:text-slate-400 prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 dark:prose-lead:text-slate-400 prose-a:font-semibold dark:prose-a:text-sky-400 prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800">
            <p className="lead">Learn how to get CacheAdvance set up in your project in under thirty minutes or it's free. </p>
            
          </div>
        </article>

        <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
          <div className="ml-auto text-right">
            <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">Next</dt>
            <dd className="mt-1">
              <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/installation">
                Installation ???
              </a>
            </dd>
          </div>
        </dl>

      </div>

      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav aria-labelledby="on-this-page-title" className="w-56">
          <h2 id="on-this-page-title" className="font-display text-sm font-medium text-slate-900 dark:text-white">On this page</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <h3><a className="text-sky-500" href="/#quick-start">Quick start</a></h3>
              <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#installing-dependencies">Installing dependencies</a></li>
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#configuring-the-library">Configuring the library</a></li>
              </ul>
            </li>
            <li>
              <h3><a className="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300" href="/#basic-usage">Basic usage</a></h3>
              <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#your-first-cache">Your first cache</a></li>
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#clearing-the-cache">Clearing the cache</a></li>
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#adding-middleware">Adding middleware</a></li>
              </ul>
            </li>
            <li>
              <h3><a className="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300" href="/#getting-help">Getting help</a></h3>
              <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#submit-an-issue">Submit an issue</a></li>
                <li><a className="hover:text-slate-600 dark:hover:text-slate-300" href="/#join-the-community">Join the community</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}