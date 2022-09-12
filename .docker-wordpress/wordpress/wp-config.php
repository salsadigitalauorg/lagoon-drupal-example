<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', getenv('MARIADB_DATABASE') ?: 'lagoon');

/** MySQL database username */
define('DB_USER', getenv('MARIADB_USERNAME') ?: 'lagoon');

/** MySQL database password */
define('DB_PASSWORD', getenv('MARIADB_PASSWORD') ?: 'lagoon');

/** MySQL hostname */
define('DB_HOST', getenv('MARIADB_HOST') ?: 'mariadb');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/** Settings that make Quant work properly. */
$protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
if ($_SERVER['HTTP_HOST'] == 'nginx') {
  $port = ':8080';
}
$port = isset($port) ? $port : '';

if (!empty($_SERVER['HTTP_HOST'])) {
  define('WP_SITEURL', $protocol . $_SERVER['HTTP_HOST'] . $port);
  define('WP_HOME', $protocol . $_SERVER['HTTP_HOST'] . $port);
  define('WP_PLUGIN_URL', $protocol . $_SERVER['HTTP_HOST'] . $port . '/content/plugins' );
  define('WP_CONTENT_URL', $protocol . $_SERVER['HTTP_HOST'] . $port . '/content');
}
elseif (!empty(getenv('LAGOON_ROUTE'))) {
  define('WP_SITEURL', $protocol . getenv('LAGOON_ROUTE')) . $port;
  define('WP_HOME', $protocol . getenv('LAGOON_ROUTE')) . $port;
  define('WP_PLUGIN_URL', $protocol . getenv('LAGOON_ROUTE') . $port . '/content/plugins' );
  define('WP_CONTENT_URL', $protocol . getenv('LAGOON_ROUTE') . $port . '/content');
}

define ('WPCF7_LOAD_JS', false);

define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
define('WP_PLUGIN_DIR', dirname( __FILE__ ) . '/content/plugins' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}


/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
