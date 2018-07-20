<?php

/**
 * 辅助函数
 * @author geekzhumail@gmail.com
 * @since 2015-03-04
 */

if (! function_exists('isWechatAgent')) {
    /**
     * 判断是否为微信浏览器
     */
    function isWechatAgent() {
        $ua = Request::server('HTTP_USER_AGENT');
        if (Agent::isMobile()) {
            // 确定为手机用户
            if (strpos($ua, 'MicroMessenger')) {
                // 确定为微信浏览器
                return true;
            }
        }
        return false;
    }
}

/**
 * 产生一个多位随机字符串
 */
if (! function_exists('createNoncestr')) {
    function createNoncestr( $length = 32, $type = 'all')
    {
        if ($type == 'all') {
            $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        } else if($type == 'number') {
            $chars = "0123456789";
        }
        $str ="";
        for ( $i = 0; $i < $length; $i++ )  {
            $str.= substr($chars, mt_rand(0, strlen($chars)-1), 1);
        }
        return $str;
    }
}
/**
 * laravel asset封装
 * @author geekzhumail@gmail.com
 * @since 2015-04-11
 */
if (! function_exists('asset_cdn')) {
    /**
     * 获取静态资源的绝对路径
     */
    function asset_cdn($path = '', $isSetSuffix = true) {
        $url = Config::get('app.static_url');
        $v = Config::get('app.static_version');
        if (empty($url)) {
            return asset($path);
        }
        $url = $url . $path;
        $urlParams = parse_url($url);
        $query = [];
        if (! empty($urlParams['query'])) {
            parse_str($urlParams['query'], $query);
        }
        if ($isSetSuffix === true) {
            $query = array_merge($query, ['_v' => $v]);
        }
        $url = $urlParams['scheme'] . '://' . $urlParams['host'] . (empty($urlParams['port']) || $urlParams['port'] == '80' || $urlParams['port'] == '443' ? '' : ':' . $urlParams['port']) . $urlParams['path'];
        if ($query) {
            $url .= '?' . http_build_query($query);
        }

        return asset($url);
    }
}

/**
 * 自定义错误判断
 * @author geekzhumail@gmail.com
 * @since 2016-09-29
 */
if (! function_exists('isError')) {
    function isError($exception)
    {
        return ($exception instanceof Exception);;
    }
}

/**
 * 验证中华人民共和国身份证有效性
 * @author geekzhumail@gmail.com
 * @since 2016-12-03
 */
if (! function_exists('isLegalIdCard')) {
    function isLegalIdCard($number)
    {
        if (strlen($number) != 18) {
            return false;
        }
        //加权因子
        $wi = array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        //校验码串
        $ai = array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        //按顺序循环处理前17位
        $sigma = 0;
        for ($i = 0; $i < 17; $i++) {
            //提取前17位的其中一位，并将变量类型转为实数
            $b = (int) $number{$i};

            //提取相应的加权因子
            $w = $wi[$i];

            //把从身份证号码中提取的一位数字和加权因子相乘，并累加
            $sigma += $b * $w;
        }
        //计算序号
        $snumber = $sigma % 11;

        //按照序号从校验码串中提取相应的字符。
        $check_number = $ai[$snumber];

        if ($number{17} == $check_number) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * 验证中文有效性
 * @author geekzhumail@gmail.com
 * @since 2016-12-03
 */
if (! function_exists('isChineseName')) {
    function isChineseName($name)
    {
        // utf8
        if (preg_match('/^([\xe4-\xe9][\x80-\xbf]{2}){2,4}$/', $name)) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * 判断月中某一天
 * @author geekzhumail@gmail.com
 * @since 2016-12-26
 * @param int|array $day
 * @return bool
 */
if (! function_exists('dayOfMonth')) {
    function dayOfMonth($day)
    {
        if (! is_array($day)) {
            if ($day == 0) {
                return false;
            } elseif ($day > 0) {
                return date('j') == $day;
            } elseif ($day < 0) {
                return date('j') == (date('t') + $day + 1);
            }
        }
        if (is_array($day) && ! empty($day)) {
            foreach ($day as $row) {
                if (dayOfMonth($row)) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}

/**
 * var_dump
 * @author geekzhumail@gmail.com
 * @since 2017-01-24
 */
if (! function_exists('vd')) {
    function vd()
    {
        $args = func_get_args();
        call_user_func_array('var_dump', $args);
    }
}

/**
 * 是否同源请求
 * @author geekzhumail@gmail.com
 * @since 2017-02-15
 */
if (! function_exists('isSameOrigin')) {
    function isSameOrigin()
    {
        $host = $_SERVER['HTTP_HOST'];
        if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'DELETE'])) {
            $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
            $originHost = parse_url($origin, PHP_URL_HOST);
            if (empty($originHost) || $originHost != $host) {
                return false;
            }
        }
        $referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
        $refererHost = parse_url($referer, PHP_URL_HOST);
        if (empty($refererHost) || $refererHost != $host) {
            return false;
        }
        return true;
    }
}

