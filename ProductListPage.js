import { request } from './api';
import productList from './productList';

export default function ProductListPage({ $target }) {
    const $page = document.createElement('div');
    $page.className = 'ProductListPage';

    $page.innerHTML = '<h1>상품 목록</h1>';

    this.render = async () => {
        $target.appendChild($page);
    };

    this.setState = (nextState) => {
        this.state = nextState;
    };

    const fetchProducts = async () => {
        const products = await request('/products');
        this.setState(products);
    };

    const productList = new ProductList({
        $target: $page,
        initialState: this.state,
    });

    fetchProducts(); // 페이지가 렌더링 될 때 (page Instance가 생성이 될 때) data를 fetch해오도록 구현
}
