import { useState, Fragment, useEffect, useCallback } from 'react';
import { MENUITEMS } from '../sidebar-component/menu';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';

const SearchHeader = () => {

    const mainmenu = MENUITEMS;
    const [searchValue, setsearchValue] = useState<any>('');
    const [searchOpen, setsearchOpen] = useState<any>(false);

    const escFunction = useCallback((event: any) => {
        if (event.keyCode === 27) {
            //Do whatever when esc is pressed
            setsearchOpen(false)
            setsearchValue('')
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    });

    const handleSearchKeyword = (keyword: any) => {
        keyword ? addFix() : removeFix()
        const items: any = [];
        setsearchValue(keyword)
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
            setsearchValue(items);
            return Items
        });
    }

    const checkSearchResultEmpty = (items: any) => {
        if (!items.length) {
            document.querySelector(".empty-menu")?.classList.add('is-open');
        } else {
            document.querySelector(".empty-menu")?.classList.remove('is-open');
        }
    }

    const addFix = () => {
        document.querySelector(".Typeahead-menu")?.classList.add('is-open');
        document.body.classList.add("offcanvas");
    }

    const removeFix = () => {
        setsearchValue('')
        document.querySelector(".Typeahead-menu")?.classList.remove('is-open');
        document.body.classList.remove("offcanvas");
    }

    const toggleBtn = () => {
        if (searchOpen) {
            setsearchOpen(!searchOpen);
            document.querySelector('.searchIcon')?.classList.add('open');
        } else {
            setsearchOpen(!searchOpen);
            document.querySelector('.searchIcon')?.classList.remove('open');
        }
    }


    return (
        <Fragment>
            <div>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input
                            className="form-control-plaintext searchIcon"
                            type="text"
                            placeholder="Search..."
                            defaultValue={searchValue}
                            onChange={(e) => handleSearchKeyword(e.target.value)}
                        />
                        <span className="d-sm-none mobile-search" onClick={toggleBtn}>
                            <Search />
                        </span>

                        <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                            {searchValue ?
                                searchValue.map((data: any, index: any) => {
                                    return (
                                        <div className="ProfileCard u-cf" key={index}>
                                            <div className="ProfileCard-avatar">
                                                <data.icon />
                                            </div>
                                            <div className="ProfileCard-details">
                                                <div className="ProfileCard-realName">
                                                    <Link
                                                        to={`${data.path}`}
                                                        className="realname"
                                                        onClick={removeFix}
                                                    >
                                                        {data.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                            }
                        </div>
                        <div className="Typeahead-menu empty-menu">
                            <div className="tt-dataset tt-dataset-0">
                                <div className="EmptyMessage">
                                    {"Opps!! There are no result found."}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default SearchHeader;