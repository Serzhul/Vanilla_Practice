import ProductListPage from './ProductListPage';
export default function App({ $target }) {
    this.route = () => {
        const { pathname } = location;

        $target.innerHTML = '';

        if (pathname === '/') {
            new ProductListPage({ $target }).render();
        } else if (pathname === '/') {
            new ProductListPage({ $target, productId }).render();
        }
    };

    this.route();
}
