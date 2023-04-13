from http.server import SimpleHTTPRequestHandler, HTTPServer

directory = r"C:\Users\Devendra\Desktop\Design_Project\temp\data"
class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print(f'Serving on {server_address[0]}:{server_address[1]}...')
    httpd.serve_forever()
