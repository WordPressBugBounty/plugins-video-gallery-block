<?php
/**
 * Plugin Name: Video Gallery Block
 * Description: Display your videos as gallery in a professional way.
 * Version: 1.1.1
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: video-gallery
   */


// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('vgb_fs')) {
    vgb_fs()->set_basename(true, __FILE__);
} else {
    // Constants
    define('VGB_PLUGIN_VERSION', (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] === 'localhost') ? time() : '1.1.1');
    define('VGB_DIR_URL', plugin_dir_url(__FILE__));
    define('VGB_PUBLIC_DIR', VGB_DIR_URL . 'public/');
    define('VGB_DIR_PATH', plugin_dir_path(__FILE__));
    define('VGB_HAS_PRO', file_exists(VGB_DIR_PATH . 'vendor/freemius/start.php'));
    define('VGB_FREE_VERSION', !VGB_HAS_PRO);


    if ( VGB_HAS_PRO ) {
		require_once VGB_DIR_PATH . 'includes/fs.php';
        require_once VGB_DIR_PATH . 'includes/video-stats-api.php';  
        require_once VGB_DIR_PATH . 'includes/woocommerce-integration.php'; 
	}else{
		require_once VGB_DIR_PATH . 'includes/fs-lite.php';
	}

    require_once VGB_DIR_PATH . 'includes/utility/functions.php';
    require_once VGB_DIR_PATH . 'includes/rootPlugin/plugin.php';

    // Main plugin class
    if (!class_exists('VGBPlugin')) {
        class VGBPlugin {
            public function __construct() {
                add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
                add_action('wp_enqueue_scripts', [$this, 'wpEnqueueScripts']);
                add_action('enqueue_block_editor_assets', [$this, 'vgbEnqueueBlockEditorAssets']);
                add_action('init', [$this, 'allDemoBlocks']);
            }

            public function enqueueBlockAssets() {
                wp_register_script(
                    'isotope',
                    VGB_PUBLIC_DIR . 'js/isotope.pkgd.min.js',
                    ['jquery'],
                    '3.0.6',
                    true
                );
                wp_enqueue_script('isotope');
            }

            public function wpEnqueueScripts() {
                wp_register_script('plyr', VGB_PUBLIC_DIR . 'js/plyr.js', [], '3.7.2', true);
                wp_register_style('plyr', VGB_PUBLIC_DIR . 'css/plyr.css', [], '3.7.2');
            }

            public function vgbEnqueueBlockEditorAssets() {
                wp_add_inline_script(
                    'vgb-video-gallery-editor-script',
                    'const vgbpipecheck = ' . wp_json_encode(vgb_IsPremium()) . ';',
                    'before'
                );
            }

            public function allDemoBlocks(){
                $demos = glob(__DIR__ . '/build/demo/*', GLOB_ONLYDIR);
                if (! empty($demos)) {
                    foreach ($demos as $demo) {
                        if (file_exists($demo . '/block.json')) {
                            register_block_type($demo);
                        }
                    }
                }else{
                    if (file_exists(__DIR__ . '/build/demo/video-gallery-block/block.json')) {
                        register_block_type(__DIR__ . '/build/demo/video-gallery-block');
                    }
                }
            }

        }

        new VGBPlugin();
    }
}

// Add custom block category
add_filter('block_categories_all', function ($categories, $post) {
    array_unshift($categories, [
        'slug'  => 'videoblocks',
        'title' => __('Video Gallery', 'video-gallery-block'),
        'icon'  => 'video-alt',
    ]);
    return $categories;
}, 10, 2);
