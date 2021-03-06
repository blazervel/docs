<!-- https://turbo.hotwired.dev/handbook/streams#stream-messages-and-actions -->
<div class="relative z-10 flex-1 px-4 flex justify-between">
  <div class="flex-1 flex">
    <form class="w-full flex md:ml-0" action="/" method="GET">
      <label for="search-field" class="sr-only">Search</label>
      <div class="relative w-full text-gray-400 focus-within:text-gray-600">
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
        <input
          type="search"
          id="search-field"
          name="search"
          value="{{ $term }}"
          placeholder="Search"
          class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm">
      </div>
    </form>
    <div class="absolute left-0 top-full bg-gray-100 w-full">
      @foreach($results as $result)
        <a href="{{ route('pages.show', $result['slug']) }}" id="search_result_{{ $result['slug'] }}" class="p-2 font-medium">
          {{ $result['title'] }}
        </a>
      @endforeach
    </div>
  </div>
</div>