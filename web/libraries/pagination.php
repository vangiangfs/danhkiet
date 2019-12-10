<?php
class Pagination
{
    var $limit;
    var $total;
    var $page;
    var $url;
    function __construct($limit, $total, $page, $url = '')
    {
        $this->limit = $limit;
        $this->total = $total;
        $this->page = $page;
        if ($url)
            $this->url = $url;
        else
        {
            if(IS_REWRITE)
                $url = $_SERVER['REQUEST_URI'];
            else
                $url = $_SERVER['REQUEST_URI'];
            $this->url = $url;
        }
    }
    function create_link_with_page($url, $page)
    {
        if (!IS_REWRITE)
        {
            $url = trim(preg_replace('/&page=[0-9]+/i', '', $url));
            if (!$page || $page == 1)
            {
                return $url;
            } else
            {
                return $url . '&page=' . $page;
            }
        } else
        {
            if (strpos($url, '.html') !== false)
            {
                if (!$page || $page == 1)
                {
                    $url = trim(preg_replace('/\/trang-[0-9]+/i', '', $url));
                } else
                {
                    $search = preg_match('#\/trang-([0-9]+)#is', $url, $main);
                    if ($search)
                    {
                        $url = preg_replace('/\/trang-[0-9]+/i', '/trang-' . $page, $url);
                    } else
                    {
                        $url = preg_replace('/.html/i', '/trang-' . $page . '.html', $url);
                    }
                }
            } else
            {
                $url = trim(preg_replace('/\/trang-[0-9]+/i', '', $url));
                if (!$page || $page == 1)
                {
                    $url = $url;
                } else
                {
                    $url = $url . '/trang-' . $page;
                }
            }
            $rUrl = $_SERVER['REQUEST_URI'];
            $rUri = $_SERVER['REQUEST_URI'];
            $qString = "";
            if(strlen($rUri) > strlen($rUrl)){
                $qString = substr($rUri, strlen($rUrl), strlen($rUri) - strlen($rUrl));
            }
            return $url.$qString;
        }
    }
    function showPagination($maxpage = 3)
    {
        $previous = "<";
        $next = ">";
        $first_page = "&#8249; &#272;&#7847;u";
        $last_page = "Cu&#7889;i &#8250;";
        $current_page = FSInput::get('page');
        if (!$current_page || $current_page < 0)
            $current_page = 1;
        $html = "";
        if ($this->limit < $this->total)
        {
            $num_of_page = ceil($this->total / $this->limit);
            $start_page = $current_page - $maxpage;
            if ($start_page <= 0)
                $start_page = 1;
            $end_page = $current_page + $maxpage;
            if ($end_page > $num_of_page)
                $end_page = $num_of_page;
            $html .= "<ul class='web-pagination pagination'>";
            if (($current_page > 1) && ($num_of_page > 1))
            {
                //$html .= "<a title='first_page' href='" . Pagination::create_link_with_page($this->url, 0) . "' title='" . FSText::_('First page') . "' >" . $first_page . "</a>";
                $html .= "<li><a rel='nofollow' class='pageLink' title='pre_page' href='" . Pagination::create_link_with_page($this->url, $current_page - 1) . "' title='" . FSText::_('Previous') . "' >" . $previous ."</a></li>";
                if ($start_page != 1)
                    $html .= "<li><a class='pageLink'>...</a> </li>";
            }
            for ($i = $start_page; $i <= $end_page; $i++)
            {
                if ($i != $current_page)
                {
                    if ($i == 1)
                        $html .= "<li><a rel='nofollow' class='pageLink' title='Page " . $i . "' href='" . Pagination::create_link_with_page($this->url, 0) . "' title='first page' >" . $i . "</a></li>";
                    else
                        $html .= "<li><a rel='nofollow' class='pageLink' title='Page " . $i . "' href='" . Pagination::create_link_with_page($this->url, $i) . "' title='" . $i . "' >" . $i . "</a></li>";
                } else
                {
                    $html .= "<li class=\"active\"><a title='Page " . $i . "' class='current pageLink'>" . $i . "</a></li>";
                }
            }
            if (($current_page < $num_of_page) && ($num_of_page > 1))
            {
                if ($end_page < $num_of_page)
                    $html .= "<li><a class='pageLink'>...</a></li> ";
                $html .= "<li><a rel='nofollow' class='pageLink' title='Next page' href='" . Pagination::create_link_with_page($this->url, $current_page + 1) . "' >" . $next . "</a></li>";
                //$html .= "<a title='Last page' href='" . Pagination::create_link_with_page($this->url, $num_of_page) . "' >" . $last_page . "</a>";
            }
            $html .= "</ul>";
        }
        return $html;
    }
}