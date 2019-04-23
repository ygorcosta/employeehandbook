use Rack::Static,
  :urls => ["/images", "/js", "/styles", "/vendor", "/docs", "/tutorials"],
  :root => ""

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
    },
    File.open('index.html', File::RDONLY)
  ]
}