import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';

export default function App({ $target }) {
    this.route = () => {
        const { pathname } = location;

        $target.innerHTML = '';

        if (pathname === '/') {
            new ProductListPage({ $target }).render();
        } else if (pathname.indexOf('/products/') === 0) {
            const [, , productId] = pathname.split('/');

            new ProductDetailPage({ $target, productId }).render();
        } else if (pathname.indexOf('/cart/' === 0)) {
            new CartPage({ $target }).render();
        }
    };

    this.route();
}
