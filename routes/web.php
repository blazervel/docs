<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Features\Pages\Search;

Route::get('/', App\Features\Pages\Home::class);
// Route::get('/',          fn (Request $request)                   => view('page', ['pageSlug' => 'welcome', 'term' => $request->search ?: '', 'results' => Search::run(term: $request->search)]));
// Route::get('{pageSlug}', fn (Request $request, string $pageSlug) => view('page', ['pageSlug' => $pageSlug, 'term' => $request->search ?: '', 'results' => Search::run(term: $request->search)]))->name('pages.show');