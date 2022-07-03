@foreach(\App\Features\Pages\All::run() as $page)
  <a href="{{ route('pages.show', $page['slug']) }}" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    <!--
      Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
    -->
    {{ $page['title'] }}
  </a>
@endforeach