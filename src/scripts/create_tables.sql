CREATE TABLE IF NOT EXISTS process (
    name varchar(50) NOT NULL PRIMARY KEY,
    description varchar(50),
    status varchar(50),
    icon_url varchar(50),
    created_at timestamp
);

CREATE TABLE IF NOT EXISTS tags (
    name varchar(50) NOT NULL PRIMARY KEY,
    description varchar(50)
);

CREATE TABLE IF NOT EXISTS process_tags (
    process_name varchar(50) REFERENCES process(name) NOT NULL,
    tag_name varchar(50) REFERENCES tags(name) NOT NULL,
    PRIMARY KEY (process_name, tag_name)
);

CREATE TABLE IF NOT EXISTS process_tags_suggestions (
    tag_name varchar(50) REFERENCES tags(name) NOT NULL,
    process_name varchar(50) REFERENCES process(name) NOT NULL,
    count integer,
    PRIMARY KEY (tag_name, process_name)
);

CREATE TABLE IF NOT EXISTS tags_message (
    id integer NOT NULL,
    tag_name varchar(50) REFERENCES tags(name) NOT NULL,
    message varchar(50),
    PRIMARY KEY (id, tag_name)
);

CREATE TABLE IF NOT EXISTS process_snapshot (
    pid integer NOT NULL,
    process_name varchar(50) REFERENCES process(name) NOT NULL,
    opened_at timestamp,
    closed_at timestamp,
    user_identification varchar(50),
    execution_source varchar(50),
    PRIMARY KEY (pid, process_name)
);

CREATE TABLE IF NOT EXISTS memory_consumption_history (
    pid integer NOT NULL,
    process_name varchar(50) NOT NULL,
    consumption_changed_at timestamp NOT NULL,
    consumption real,
    FOREIGN KEY (pid, process_name) REFERENCES process_snapshot (pid, process_name),
    PRIMARY KEY (pid, process_name, consumption_changed_at)
);

CREATE TABLE IF NOT EXISTS network_consumption_history (
    pid integer NOT NULL,
    process_name varchar(50) NOT NULL,
    consumption_changed_at timestamp NOT NULL,
    consumption real,
    FOREIGN KEY (pid, process_name) REFERENCES process_snapshot (pid, process_name),
    PRIMARY KEY (pid, process_name, consumption_changed_at)
);

CREATE TABLE IF NOT EXISTS cpu_consumption_history (
    pid integer NOT NULL,
    process_name varchar(50) NOT NULL,
    consumption_changed_at timestamp NOT NULL,
    consumption real,
    FOREIGN KEY (pid, process_name) REFERENCES process_snapshot (pid, process_name),
    PRIMARY KEY (pid, process_name, consumption_changed_at)
);

CREATE TABLE IF NOT EXISTS power_consumption_history (
    pid integer NOT NULL,
    process_name varchar(50) NOT NULL,
    consumption_changed_at timestamp NOT NULL,
    consumption real,
    FOREIGN KEY (pid, process_name) REFERENCES process_snapshot (pid, process_name),
    PRIMARY KEY (pid, process_name, consumption_changed_at)
);
