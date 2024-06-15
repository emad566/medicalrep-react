import { useState, useEffect, useCallback } from 'react';
import { Star } from 'react-feather';
import { MENUITEMS } from './sidebar-component/menu';
import { Link } from 'react-router-dom';

const Bookmark = () => {
    const mainmenu = MENUITEMS;
    const [openSearch, setOpenSearch] = useState<any>(false);
    const [searchValue, setSearchValue] = useState<any>('');
    const [searchResult, setSearchResult] = useState<any>([]);
    const [bookmarkItems, setBookmarkItems] = useState<any>([]);


    const escFunction = useCallback((event: any) => {
        if (event.keyCode === 27) {
            //Do whatever when esc is pressed
            setSearchValue('')
            setSearchResult([])
            setOpenSearch(false)
            document.querySelector(".filled-bookmark")?.classList.remove('is-open');
            document.querySelector(".page-wrapper")?.classList.remove("offcanvas-bookmark");
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        mainmenu.filter(menuItems => {
            if (menuItems.bookmark) {
                setBookmarkItems((bookmarkItems: any) => [...bookmarkItems, menuItems])
            }
            return 0;
        });

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction, mainmenu]);

    const handleSearchKeyword = (keyword: any) => {
        keyword ? addFix() : removeFix()
        const items: any = [];
        setSearchValue(keyword)
        mainmenu?.filter(Items => {
            if (Items.title.toLowerCase().includes(keyword) && Items.type === 'link') {
                items.push(Items);
            }
            if (!Items.children) return false
            Items?.children?.filter((subItems: any) => {
                if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                    subItems.icon = Items.icon
                    items.push(subItems);
                }
                if (!subItems.children) return false
                subItems?.children?.filter((suSubItems: any) => {
                    if (suSubItems.title.toLowerCase().includes(keyword)) {
                        suSubItems.icon = Items.icon
                        items.push(suSubItems);
                    }
                    return suSubItems
                })
                return subItems
            })
            checkSearchResultEmpty(items)
            setSearchResult(items);
            return Items
        });
    }

    const checkSearchResultEmpty = (items: any) => {
        if (!items.length) {
            document.querySelector(".empty-bookmark")?.classList.add('is-open');

        } else {
            document.querySelector(".empty-bookmark")?.classList.remove('is-open');
        }
    }

    const addFix = () => {
        document.querySelector(".filled-bookmark")?.classList.add('is-open');
        document.querySelector(".page-wrapper")?.classList.add("offcanvas-bookmark");
    }

    const removeFix = () => {
        setSearchValue('')
        setSearchResult([])
        document.querySelector(".filled-bookmark")?.classList.remove('is-open');
        document.querySelector(".page-wrapper")?.classList.remove("offcanvas-bookmark");
    }

    const addToBookmark = (event: any, items: any) => {
        const index = bookmarkItems.indexOf(items);
        if (index === -1 && !items.bookmark) {
            items.bookmark = true;
            event.currentTarget.classList.add('starred');
            setBookmarkItems([...bookmarkItems, items])
        } else {
            event.currentTarget.classList.remove('starred');
            bookmarkItems.splice(index, 1);
            setBookmarkItems(bookmarkItems)
            items.bookmark = false;
        }
    }

    const removeOffcanvas = () => {
        if (openSearch) {
            setSearchValue('')
            setSearchResult([])
            document.querySelector(".filled-bookmark")?.classList.remove('is-open');
            document.querySelector(".page-wrapper")?.classList.remove("offcanvas-bookmark");
        }
        setOpenSearch(!openSearch)
    }

    return (
        <div className="col">
            <div className="bookmark pull-right">
                <ul>
                    {
                        bookmarkItems.map((items: any, index: any) => {
                            return (
                                <li key={index}>
                                    <Link to={`${window.location.origin}/${items.path}`} className="realname">
                                        <items.icon id={`${items[index]}`} />
                                    </Link>
                                </li>
                            )
                        })}

                    <li>
                        <a href="#javascript" onClick={removeOffcanvas}>
                            <Star className="bookmark-search" />
                        </a>
                        <form className="form-inline search-form">
                            <div className={`form-group form-control-search ${openSearch ? 'open' : ''}`}>
                                <input
                                    className="form-control-plaintext "
                                    type="text"
                                    placeholder="search"
                                    value={searchValue}
                                    onChange={(e) => handleSearchKeyword(e.target.value)}
                                />
                                <div className="Typeahead-menu filled-bookmark custom-scrollbar" id="search-outer">
                                    {searchValue ?
                                        searchResult?.map((data: any, index: any) => {
                                            return (
                                                <div className="ProfileCard u-cf" key={index}>
                                                    <div className="ProfileCard-avatar">
                                                        {data.icon && <data.icon />}
                                                    </div>
                                                    <div className="ProfileCard-details">
                                                        <div className="ProfileCard-realName">
                                                            <Link to={`${window.location.origin}/${data.path}`} className="realname" onClick={() => removeFix()}>
                                                                {data.title}
                                                            </Link>
                                                            <span className="pull-right">
                                                                <a href="##">
                                                                    <i className="fa fa-star-o mt-1 icon-star" onClick={(e) => addToBookmark(e, data)}></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : ''}
                                </div>
                                <div className="Typeahead-menu empty-bookmark">
                                    <div className="tt-dataset tt-dataset-0">
                                        <div className="EmptyMessage">
                                            {"Opps!! There are no result found."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Bookmark;