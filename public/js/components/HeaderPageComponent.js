import error from "./ErrorComponent"
import cart from "./CartComponent"
import filterProducts from "./FilterComponent"

const headerPage = {
  components: {
    'filter-products': filterProducts,
    cart,
    error,
  },
  template: `<header class="header-page">
				<div class="container">
					<div class="header-menu">
						<div class="header-menu__wrp">
							<a href="index.html"><img src="img/logo.svg" alt="brand logo" class="header-menu__logo"></a>
							<!-- фильтр каталога товаров -->
							<filter-products></filter-products>
						</div>

						<ul class="header-menu__wrp">
							<li>
								<details class="category-nav">
									<summary class="category-nav__dropdown">
									</summary>
									<nav class="category-nav__menu">
										<h5 class="category-nav__title">
											menu
										</h5>
										<h6 class="category-nav__heading">
											man
										</h6>
										<ul class="category-nav__list">
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Accessories
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class=" category-nav__link">
													Bags
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class=" category-nav__link">
													Denim
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class=" category-nav__link">
													T-Shirts
												</a>
											</li>
										</ul>

										<h6 class="category-nav__heading">
											woman
										</h6>
										<ul class="category-nav__list">
											<li class="category-nav__item">
												<a href="catalog.html" class=" category-nav__link">
													Accessories
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Jackets &amp;&nbsp;Coats
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Polos
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													T-Shirts
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Shirts
												</a>
											</li>
										</ul>

										<h6 class="category-nav__heading">
											kids
										</h6>
										<ul class="category-nav__list">
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Accessories
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Jackets &amp;&nbsp;Coats
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Polos
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													T-Shirts
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Shirts
												</a>
											</li>
											<li class="category-nav__item">
												<a href="catalog.html" class="category-nav__link">
													Bags
												</a>
											</li>
										</ul>
									</nav>
								</details>
							</li>
							<li>
								<a href="registration.html" class="header-menu__account"></a>
							</li>
							<li>
								<!-- выпадающая корзина -->
								<cart ref="cart"></cart>
							</li>
						</ul>
					</div>
				</div>
			</header>
  `
}

export default headerPage