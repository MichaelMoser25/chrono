
// Improved Watch Collection Script
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.querySelector('header');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const caseDisplay = document.querySelector('.case-display');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const currentPageEl = document.querySelector('.current-page');
    const totalPagesEl = document.querySelector('.total-pages');

    // Watch Collection Data - organized in pages
    const watchCollectionData = [
        // Page 1
        [
            {
                id: 'w1',
                name: 'Rolex Daydate',
                price: 260,
                image: 'images/rolexDaydateBlack.jpeg',
                isNew: true,
                collection: 'rolex',
                brand: 'rolex'
            },
            {
                id: 'w2',
                name: 'Rolex Datejust Arabic Dial',
                price: 270,
                image: 'images/rolexArabic.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'rolex'
            },
            {
                id: 'w3',
                name: 'Rolex Yacht Master',
                price: 260,
                image: 'images/rolecYachtMasterSilver.jpeg',
                isNew: false,
                collection: 'sport',
                brand: 'rolex'
            },
            {
                id: 'w4',
                name: 'Patek Geneve Rose Gold',
                price: 290,
                image: 'images/patekRose.jpeg',
                isNew: false,
                collection: 'casual',
                brand: 'patek'
            },
            {
                id: 'w5',
                name: 'Patek Geneve Blue Dial',
                price: 290,
                image: 'images/patekBlue.jpeg',
                isNew: true,
                collection: 'luxury',
                brand: 'patek'
            },
            {
                id: 'w6',
                name: 'Patek Geneve Black Dial',
                price: 290,
                image: 'images/patek_black.jpeg',
                isNew: false,
                collection: 'sport',
                brand: 'patek'
            },
            {
                id: 'w7',
                name: 'Cartier Skeleton',
                price: 290,
                image: 'images/cartierSkeleton.jpeg',
                isNew: false,
                collection: 'vintage',
                brand: 'cartier'
            },
            {
                id: 'w8',
                name: 'Cartier Skeleton Black',
                price: 290,
                image: 'images/CartierSkeletonBlack.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'cartier'
            },
            {
                id: 'w9',
                name: 'Cartier Skeleton Blue',
                price: 290,
                image: 'images/cartierSkeletonBlue.jpeg',
                isNew: true,
                collection: 'sport',
                brand: 'cartier'
            },
            {
                id: 'w10',
                name: 'Cartier Santos Black Dial',
                price: 290,
                image: 'images/cartierSantosBlack.jpeg',
                isNew: false,
                collection: 'sport',
                brand: 'cartier'
            },
            {
                id: 'w11',
                name: 'Cartier Santos Black on Black',
                price: 290,
                image: 'images/cartierSantosBlck.jpeg',
                isNew: false,
                collection: 'casual',
                brand: 'cartier'
            },
            {
                id: 'w12',
                name: 'Cartier Tank',
                price: 290,
                image: 'images/cartierTank.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'cartier'
            },
            {
                id: 'w13',
                name: 'Audemars Piguet Royal Oak Chrono',
                price: 260,
                image: 'images/ap_blackChrona.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'ap'
            },
            {
                id: 'w14',
                name: 'Audemars Piguet Chrono Moon Dial Black',
                price: 360,
                image: 'images/ap_blackMoon.jpeg',
                isNew: true,
                collection: 'luxury',
                brand: 'ap'
            },
            {
                id: 'w15',
                name: 'Audemars Piguet Chrono Moon Dial Rose Gold',
                price: 360,
                image: 'images/ap_roseMoon.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'ap'
            },
            {
                id: 'w16',
                name: 'Audemars Piguet Chrono Moon Dial Silver',
                price: 360,
                image: 'images/ap_silverMoon.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'ap'
            },
            {
                id: 'w17',
                name: 'Audemars Piguet Royal Oak Rose Gold',
                price: 260,
                image: 'images/ap_rose.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'ap'
            },
            {
                id: 'w18',
                name: 'Audemars Piguet Royal Oak Rose Silver',
                price: 260,
                image: 'images/ap_silver.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'ap'
            },
            {
                id: 'w19',
                name: 'TAG Heuer Monaco',
                price: 7250,
                image: 'images/tagMonaco.jpeg',
                isNew: true,
                collection: 'luxury',
                brand: 'tag'
            },
            {
                id: 'w20',
                name: 'TAG Heuer F1',
                price: 3850,
                image: 'images/tagF1.jpeg',
                isNew: false,
                collection: 'luxury',
                brand: 'tag'
            },
            {
                id: 'w21',
                name: 'TAG Heuer',
                price: 2750,
                image: 'images/tag.jpeg',
                isNew: false,
                collection: 'vintage',
                brand: 'tag'
            },
            {
                id: 'w22',
                name: 'Panerai',
                price: 1950,
                image: 'images/panerai.jpeg',
                isNew: false,
                collection: 'casual',
                brand: 'panerai'
            },
            {
                id: 'w23',
                name: 'Omega Snoopy Edition',
                price: 6450,
                image: 'images/omegaSnoopy.jpeg',
                isNew: true,
                collection: 'luxury',
                brand: 'omega'
            },
            {
                id: 'w24',
                name: 'Omega Seamaster',
                price: 3250,
                image: 'images/omegaSeamaster.jpeg',
                isNew: false,
                collection: 'sport',
                brand: 'omega'
            }

        ]
        // Page 2
        
            
        //     {
        //         id: 'w25',
        //         name: 'Leather Heritage',
        //         price: 2150,
        //         image: 'https://images.unsplash.com/photo-1524592094857-4a48b078f7c4',
        //         isNew: false,
        //         collection: 'vintage',
        //         brand: 'rolex'
        //     },
        //     {
        //         id: 'w26',
        //         name: 'Pearl Elegance',
        //         price: 2950,
        //         image: 'https://images.unsplash.com/photo-1619134778589-0695ae764df2',
        //         isNew: true,
        //         collection: 'luxury',
        //         brand: 'cartier'
        //     },
        //     {
        //         id: 'w27',
        //         name: 'Speedmaster',
        //         price: 4150,
        //         image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'tag'
        //     },
        //     {
        //         id: 'w28',
        //         name: 'Racing Chrono',
        //         price: 3750,
        //         image: 'https://images.unsplash.com/photo-1541778480-82c66d658b7e',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'ap'
        //     },
        //     {
        //         id: 'w29',
        //         name: 'Minimalist One',
        //         price: 1650,
        //         image: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347',
        //         isNew: false,
        //         collection: 'casual',
        //         brand: 'rolex'
        //     },
        //     {
        //         id: 'w30',
        //         name: 'Classic Tonneau',
        //         price: 2350,
        //         image: 'https://images.unsplash.com/photo-1616459651565-1b7fe7e1d215',
        //         isNew: false,
        //         collection: 'vintage',
        //         brand: 'cartier'
        //     }
        // ],
        // // Page 3
        // [
        //     {
        //         id: 'w31',
        //         name: 'Platinum Elite',
        //         price: 8950,
        //         image: 'https://images.unsplash.com/photo-1580287016067-479be1909a7e',
        //         isNew: true,
        //         collection: 'luxury',
        //         brand: 'ap'
        //     },
        //     {
        //         id: 'w32',
        //         name: 'Summit Reserve',
        //         price: 5250,
        //         image: 'https://images.unsplash.com/photo-1614309734159-321ceaeaa7ae',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'tag'
        //     },
        //     {
        //         id: 'w33',
        //         name: 'Field Explorer',
        //         price: 2850,
        //         image: 'https://images.unsplash.com/photo-1614164138284-4b4061b08c83',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'rolex'
        //     },
        //     {
        //         id: 'w34',
        //         name: 'Smart Chrono',
        //         price: 2450,
        //         image: 'https://images.unsplash.com/photo-1573643808568-4a3c26f3a06b',
        //         isNew: true,
        //         collection: 'casual',
        //         brand: 'tag'
        //     },
        //     {
        //         id: 'w35',
        //         name: 'Sapphire Crystal',
        //         price: 7450,
        //         image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1',
        //         isNew: false,
        //         collection: 'luxury',
        //         brand: 'cartier'
        //     },
        //     {
        //         id: 'w36',
        //         name: 'Diver Pro',
        //         price: 4250,
        //         image: 'https://images.unsplash.com/photo-1534798741814-9dec873d647c',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'rolex'
        //     },
        //     {
        //         id: 'w37',
        //         name: 'Art Deco',
        //         price: 3150,
        //         image: 'https://images.unsplash.com/photo-1612359941938-e9587d9f6b29',
        //         isNew: false,
        //         collection: 'vintage',
        //         brand: 'cartier'
        //     },
        //     {
        //         id: 'w38',
        //         name: 'Moonphase Master',
        //         price: 5950,
        //         image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9',
        //         isNew: true,
        //         collection: 'luxury',
        //         brand: 'ap'
        //     },
        //     {
        //         id: 'w37',
        //         name: 'Carbon Fiber',
        //         price: 4450,
        //         image: 'https://images.unsplash.com/photo-1565440962783-f87efdea99fd',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'tag'
        //     },
        //     {
        //         id: 'w38',
        //         name: 'Expedition GMT',
        //         price: 3850,
        //         image: 'https://images.unsplash.com/photo-1581553673739-c4906b5d0de8',
        //         isNew: false,
        //         collection: 'sport',
        //         brand: 'rolex'
        //     },
        //     {
        //         id: 'w39',
        //         name: 'Classic Round',
        //         price: 1950,
        //         image: 'https://images.unsplash.com/photo-1548171245-9233f910d6c1',
        //         isNew: false,
        //         collection: 'casual',
        //         brand: 'cartier'
        //     },
        //     {
        //         id: 'w40',
        //         name: 'Steampunk Edition',
        //         price: 2850,
        //         image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
        //         isNew: false,
        //         collection: 'vintage',
        //         brand: 'tag'
        //     }
        
    ];

    // Variables
    let currentPage = 0;
    const totalPages = watchCollectionData.length;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let currentBrand = 'all'; // Track currently selected brand

    // Initialize page
    function init() {
        // Update page indicators
        updatePageIndicators();
        
        // Load initial page of watches
        renderWatchPage(currentPage);
        
        // Update cart count
        updateCartCount();
        
        // Set up event listeners
        setupEventListeners();
    }

    // Update page indicators
    function updatePageIndicators() {
        currentPageEl.textContent = currentPage + 1;
        totalPagesEl.textContent = totalPages;
    }

    // IMPROVED: Render watches for current page with better layout
    function renderWatchPage(pageIndex) {
        // Clear current display
        caseDisplay.innerHTML = '';
        
        // Get watches for current page
        const watches = watchCollectionData[pageIndex];
        
        // Filter watches by brand if needed
        const filteredWatches = currentBrand === 'all' 
            ? watches 
            : watches.filter(watch => watch.brand === currentBrand);
        
        // Show message if no watches match filter
        if (filteredWatches.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>No watches found</h3>
                <p>No ${currentBrand === 'all' ? '' : currentBrand} watches available on this page.</p>
            `;
            caseDisplay.appendChild(noResults);
            return;
        }
        
        // Render each watch with improved layout
        filteredWatches.forEach(watch => {
            const watchItem = document.createElement('div');
            watchItem.className = 'watch-item';
            watchItem.dataset.id = watch.id;
            
            // Check if watch is in wishlist
            const isInWishlist = wishlist.includes(watch.id);
            const wishlistIconClass = isInWishlist ? 'fas fa-heart' : 'far fa-heart';
            const wishlistIconColor = isInWishlist ? '#EF4444' : '';
            
            // IMPROVED: Enhanced watch item HTML structure
            watchItem.innerHTML = `
                ${watch.isNew ? '<span class="watch-tag">New</span>' : ''}
                <div class="watch-actions">
                    <div class="watch-action wishlist-btn" title="Add to wishlist">
                        <i class="${wishlistIconClass}" style="color: ${wishlistIconColor}"></i>
                    </div>
                    <div class="watch-action cart-btn" title="Add to cart">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                </div>
                <img src="${watch.image}" alt="${watch.name}" class="watch-img">
                <h3 class="watch-name">${watch.name}</h3>
                <p class="watch-price">$${watch.price.toLocaleString()}</p>
            `;
            
            caseDisplay.appendChild(watchItem);
        });
        
        // Add event listeners to watch items
        addWatchItemListeners();
    }

    // Add event listeners to watch items
    function addWatchItemListeners() {
        // Wishlist buttons
        const wishlistBtns = document.querySelectorAll('.wishlist-btn');
        wishlistBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const watchItem = btn.closest('.watch-item');
                const watchId = watchItem.dataset.id;
                toggleWishlist(watchId, btn);
            });
        });
        
        // Cart buttons
        const cartBtns = document.querySelectorAll('.cart-btn');
        cartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const watchItem = btn.closest('.watch-item');
                const watchId = watchItem.dataset.id;
                addToCart(watchId);
            });
        });
        
        // Watch item click - could navigate to product page
        const watchItems = document.querySelectorAll('.watch-item');
        watchItems.forEach(item => {
            item.addEventListener('click', () => {
                const watchId = item.dataset.id;
                // For demo purposes, just show an alert
                const watchData = findWatchById(watchId);
                if (watchData) {
                    showNotification(`Viewing details for ${watchData.name}`);
                    
                    // IMPROVED: We could add a modal with watch details here
                    showWatchDetails(watchData);
                }
            });
        });
    }

    // IMPROVED: Function to show watch details in a modal with a much larger image
    function showWatchDetails(watch) {
        // Check if modal already exists
        let modal = document.querySelector('.watch-modal');
        
        // Create modal if it doesn't exist
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'watch-modal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(2,6,23,0.95)';
            modal.style.zIndex = '2000';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';
            
            document.body.appendChild(modal);
        }
        
        // Determine if it's a mobile device
        const isMobile = window.innerWidth <= 768;
        
        // Create modal content with much larger image
        modal.innerHTML = `
            <div class="modal-content" style="background-color: var(--dark); max-width: 95%; width: ${isMobile ? '90%' : '80%'}; border-radius: 15px; position: relative; color: var(--light); display: flex; flex-direction: ${isMobile ? 'column' : 'row'}; max-height: 90vh; overflow-y: auto;">
                <button class="modal-close" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: var(--light); font-size: 1.8rem; cursor: pointer; z-index: 10;">&times;</button>
                
                <!-- Enlarged image section -->
                <div style="flex: ${isMobile ? '1' : '3'}; padding: ${isMobile ? '2rem 1rem' : '2rem'}; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                    <img src="${watch.image}" alt="${watch.name}" style="width: 100%; max-width: ${isMobile ? '300px' : '600px'}; height: auto; border-radius: 10px; box-shadow: 0 15px 40px rgba(0,0,0,0.3); object-fit: contain; transition: transform 0.3s ease;" class="modal-watch-img">
                </div>
                
                <!-- Watch details section -->
                <div style="flex: ${isMobile ? '1' : '2'}; padding: ${isMobile ? '1rem' : '3rem 2rem'}; display: flex; flex-direction: column; justify-content: center;">
                    <h2 style="color: var(--accent); font-size: ${isMobile ? '1.8rem' : '2.5rem'}; margin-bottom: 0.5rem;">${watch.name}</h2>
                    <p style="font-size: ${isMobile ? '1.5rem' : '2rem'}; margin-bottom: 1.5rem; font-weight: 700;">${watch.price.toLocaleString()}</p>
                    
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                        <span style="background-color: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 30px; font-size: 0.9rem; text-transform: capitalize;">${watch.collection}</span>
                        <span style="background-color: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 30px; font-size: 0.9rem; text-transform: capitalize;">${watch.brand}</span>
                        ${watch.isNew ? '<span style="background-color: var(--accent); color: var(--dark); padding: 0.5rem 1rem; border-radius: 30px; font-size: 0.9rem;">New</span>' : ''}
                    </div>
                    
                    <p style="opacity: 0.8; line-height: 1.6; margin-bottom: 2rem;">Experience the pinnacle of craftsmanship with this exquisite timepiece. Precision engineering meets elegant design in a watch meant to be treasured for generations.</p>
                    
                    <div style="display: flex; gap: 1rem; width: 100%;">
                        <button class="add-to-cart-btn" data-id="${watch.id}" style="flex: 1; padding: 1rem; background-color: var(--accent); color: var(--dark); border: none; border-radius: 5px; font-weight: 600; cursor: pointer; transition: var(--transition);">Add to Cart</button>
                        <button class="add-to-wishlist-btn" data-id="${watch.id}" style="flex: 1; padding: 1rem; background-color: transparent; color: var(--light); border: 2px solid var(--accent); border-radius: 5px; font-weight: 600; cursor: pointer; transition: var(--transition);">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        `;
        
        // Show modal with animation
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        // Add image zoom on hover
        const modalWatchImg = modal.querySelector('.modal-watch-img');
        if (modalWatchImg) {
            modalWatchImg.addEventListener('mouseover', () => {
                if (!isMobile) {
                    modalWatchImg.style.transform = 'scale(1.1)';
                    modalWatchImg.style.cursor = 'zoom-in';
                }
            });
            
            modalWatchImg.addEventListener('mouseout', () => {
                if (!isMobile) {
                    modalWatchImg.style.transform = 'scale(1)';
                }
            });
            
            // Add click to zoom even further
            modalWatchImg.addEventListener('click', (e) => {
                e.stopPropagation();
                if (modalWatchImg.classList.contains('zoomed')) {
                    modalWatchImg.style.transform = !isMobile ? 'scale(1.1)' : 'scale(1)';
                    modalWatchImg.classList.remove('zoomed');
                    modalWatchImg.style.cursor = 'zoom-in';
                } else {
                    modalWatchImg.style.transform = 'scale(1.5)';
                    modalWatchImg.classList.add('zoomed');
                    modalWatchImg.style.cursor = 'zoom-out';
                }
            });
        }
        
        // Close modal button
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.opacity = '0';
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            }, 300);
        });
        
        // Add to cart button
        const addToCartBtn = modal.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            addToCart(watch.id);
            // Close modal after adding to cart
            setTimeout(() => {
                closeBtn.click();
            }, 1000);
        });
        
        // Add to wishlist button
        const addToWishlistBtn = modal.querySelector('.add-to-wishlist-btn');
        addToWishlistBtn.addEventListener('click', () => {
            const isInWishlist = wishlist.includes(watch.id);
            
            if (isInWishlist) {
                // Remove from wishlist
                const index = wishlist.indexOf(watch.id);
                wishlist.splice(index, 1);
                showNotification(`${watch.name} removed from wishlist!`, 'info');
                addToWishlistBtn.textContent = 'Add to Wishlist';
            } else {
                // Add to wishlist
                wishlist.push(watch.id);
                showNotification(`${watch.name} added to wishlist!`);
                addToWishlistBtn.textContent = 'Remove from Wishlist';
            }
            
            // Save to localStorage
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            
            // Update wishlist icon on main page
            const wishlistBtn = document.querySelector(`.watch-item[data-id="${watch.id}"] .wishlist-btn i`);
            if (wishlistBtn) {
                if (isInWishlist) {
                    wishlistBtn.classList.remove('fas');
                    wishlistBtn.classList.add('far');
                    wishlistBtn.style.color = '';
                } else {
                    wishlistBtn.classList.remove('far');
                    wishlistBtn.classList.add('fas');
                    wishlistBtn.style.color = '#EF4444';
                }
            }
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
        
        // Add escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.parentNode) {
                closeBtn.click();
            }
        });
    }

    // Toggle item in wishlist
    function toggleWishlist(watchId, btnElement) {
        const index = wishlist.indexOf(watchId);
        const watchData = findWatchById(watchId);
        
        if (!watchData) return;
        
        if (index === -1) {
            // Add to wishlist
            wishlist.push(watchId);
            btnElement.querySelector('i').classList.remove('far');
            btnElement.querySelector('i').classList.add('fas');
            btnElement.querySelector('i').style.color = '#EF4444';
            showNotification(`${watchData.name} added to wishlist!`);
        } else {
            // Remove from wishlist
            wishlist.splice(index, 1);
            btnElement.querySelector('i').classList.remove('fas');
            btnElement.querySelector('i').classList.add('far');
            btnElement.querySelector('i').style.color = '';
            showNotification(`${watchData.name} removed from wishlist!`, 'info');
        }
        
        // Save to localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Add item to cart
    function addToCart(watchId) {
        const watchData = findWatchById(watchId);
        
        if (!watchData) return;
        
        // Check if item already in cart
        const existingItem = cart.find(item => item.id === watchId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            // Add new item to cart
            cart.push({
                id: watchId,
                name: watchData.name,
                price: watchData.price,
                image: watchData.image,
                quantity: 1
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count
        updateCartCount();
        
        // Show notification
        showNotification(`${watchData.name} added to cart!`);
    }

    // Update cart count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    // Find watch by ID
    function findWatchById(watchId) {
        for (const page of watchCollectionData) {
            const watch = page.find(w => w.id === watchId);
            if (watch) return watch;
        }
        return null;
    }

    // IMPROVED: Show notification with better styling
    function showNotification(message, type = 'success') {
        // Check if notification container exists, create if not
        let notificationContainer = document.querySelector('.notification-container');
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            notificationContainer.style.position = 'fixed';
            notificationContainer.style.bottom = '20px';
            notificationContainer.style.right = '20px';
            notificationContainer.style.zIndex = '1000';
            document.body.appendChild(notificationContainer);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.backgroundColor = 'white';
        notification.style.color = '#0F172A';
        notification.style.padding = '1rem 1.5rem';
        notification.style.borderRadius = '10px';
        notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.justifyContent = 'space-between';
        notification.style.transform = 'translateX(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';
        notification.style.marginBottom = '10px';
        notification.style.maxWidth = '90%';
        notification.style.width = '300px';
        
        // Set border color and icon based on type
        let iconClass = 'fas fa-check-circle';
        let borderColor = '#10B981';
        
        if (type === 'error') {
            iconClass = 'fas fa-exclamation-circle';
            borderColor = '#EF4444';
        } else if (type === 'info') {
            iconClass = 'fas fa-info-circle';
            borderColor = '#0EA5E9';
        }
        
        notification.style.borderLeft = `4px solid ${borderColor}`;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="${iconClass}" style="color: ${borderColor}; font-size: 1.2rem;"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" style="background:none; border:none; color:#334155; font-size:1.2rem; cursor:pointer; margin-left:1rem;">&times;</button>
        `;
        
        // Add to container
        notificationContainer.appendChild(notification);
        
        // Show with animation
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            hideNotification(notification);
        }, 3000);
        
        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            hideNotification(notification);
        });
    }

    // Hide notification
    function hideNotification(notification) {
        notification.style.transform = 'translateX(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // IMPROVED: Set up event listeners with enhanced mobile support
    function setupEventListeners() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        if (mobileMenu) {
            mobileMenu.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (navMenu.classList.contains('active') && 
                    !navMenu.contains(e.target) && 
                    !mobileMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
        
        // Previous page button
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updatePageIndicators();
                renderWatchPage(currentPage);
                
                // Scroll to top of case
                const caseElement = document.querySelector('.collection-case');
                if (caseElement) {
                    caseElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
        
        // Next page button
        nextPageBtn.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                updatePageIndicators();
                renderWatchPage(currentPage);
                
                // Scroll to top of case
                const caseElement = document.querySelector('.collection-case');
                if (caseElement) {
                    caseElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
        
        // Brand filter buttons with smoother interaction
        const brandFilters = document.querySelectorAll('.brand-filter');
        brandFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update active state
                brandFilters.forEach(btn => btn.classList.remove('active'));
                filter.classList.add('active');
                
                // Get selected brand
                currentBrand = filter.dataset.brand;
                
                // Reset to first page
                currentPage = 0;
                
                // Update page indicators
                updatePageIndicators();
                
                // Render filtered watches with animation
                caseDisplay.style.opacity = '0';
                setTimeout(() => {
                    renderWatchPage(currentPage);
                    caseDisplay.style.opacity = '1';
                }, 300);
            });
        });
        
        // Brand navigation links with improved scrolling
        const brandLinks = document.querySelectorAll('.brand-link');
        brandLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // Get brand from data attribute
                const brand = link.dataset.brand;
                
                // Scroll to collection section with better animation
                document.getElementById('collection').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Set timeout to allow scroll to complete before changing filter
                setTimeout(() => {
                    // Find and click corresponding brand filter
                    const brandFilter = document.querySelector(`.brand-filter[data-brand="${brand}"]`);
                    if (brandFilter) {
                        brandFilter.click();
                    }
                }, 800);
            });
        });
        
        // Add swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        caseDisplay.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        caseDisplay.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
        
        // Handle swipe gesture
        function handleSwipe() {
            const swipeThreshold = 100; // Minimum distance for swipe detection
            
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left - next page
                if (currentPage < totalPages - 1) {
                    nextPageBtn.click();
                }
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right - previous page
                if (currentPage > 0) {
                    prevPageBtn.click();
                }
            }
        }
    }

    // Initialize the page
    init();
});